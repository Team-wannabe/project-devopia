from flask import Flask, request, redirect, Blueprint, render_template, jsonify
import requests
from datetime import datetime
import datetime
from credentials.firebase_config import db
from twilio.twiml.messaging_response import MessagingResponse
import re
from firebase_admin import firestore
# from routes.stock import email, your_portfolio


whatsapp_bot_bp = Blueprint('whatsapp_bot', __name__)

@whatsapp_bot_bp.route('/whatsappbot', methods=['GET', 'POST'])
def whatsapp_bot():
    incoming_msg = request.values.get('Body', '').lower()
    print(incoming_msg)
    
    resp = MessagingResponse()
    msg = resp.message()

    responded = False
    from routes.stock import your_portfolio

    currency_pattern = r'(?:(?<!\S)(?:₹|Rs?|\$)\s*(\d+(?:\.\d+)?)|(?:rs?)\s*(\d+(?:\.\d+)?)\s*(?!\S))'

    amounts = re.findall(currency_pattern, incoming_msg)
    from routes.stock import your_portfolio
    email = "adityachavan271@gmail.com"
    if amounts:
        amount_to_add = None
        for match in amounts:
            for group in match:
                if group:
                    amount_to_add = int(float(group))  # Convert to float first to handle decimal numbers, then cast to int
                    break
            if amount_to_add is not None:
                break

        if amount_to_add is not None:
            if 'sent' in incoming_msg or 'sending' in incoming_msg or 'expense' in incoming_msg or 'add to expenditure' in incoming_msg or 'adding' in incoming_msg:
                coll_ref = db.collection('users').document(f'{email}').collection('expense')
                data = {str(datetime.datetime.now()): amount_to_add}  # Use current timestamp
                coll_ref.document().set(data)
                msg.body(f"adding {amount_to_add} expenditure to your account")

            elif 'income' in incoming_msg or 'adding' in incoming_msg:
                coll_ref = db.collection('users').document(f'{email}').collection('credits')
                data = {str(datetime.datetime.now()): amount_to_add}  # Use current timestamp
                coll_ref.document().set(data)
                msg.body(f"crediting {amount_to_add} to your account")
            
    
    # if 'sent' in incoming_msg or 'sending' in incoming_msg or 'expense' in incoming_msg or 'add to expenditure' in incoming_msg or 'adding' in incoming_msg:
    #     coll_ref = db.collection('users').document(f'{email}').collection('expense').document('allexpense')
    #     msg.body(f"adding expenditure to your account")

        

    # if  'income' in incoming_msg or 'adding' in incoming_msg:
    #     coll_ref = db.collection('users').document(f'{email}').collection('credits').document('allcredits')
    #     msg.body(f"crediting to your account")


        
    elif 'portfolio' in incoming_msg:
        data = your_portfolio()
        message = "Portfolio Summary:\n\n"
        message += f"Total Investment: ₹{data['total_investment']}\n"
        message += f"Total Current Value: ₹{data['total_current_value']}\n"
        message += f"Total Return: ₹{data['total_return']}\n\n"

        for symbol_data in data['symbols_data']:
            message += f"{symbol_data['symbol']}:\n"
            message += f"Quantity: {symbol_data['quantity']}\n"
            message += f"Purchase Price: ₹{symbol_data['purchase_price']}\n"
            message += f"Current Price: ₹{symbol_data['current_price']}\n"
            message += f"Current Value: ₹{symbol_data['current_value']}\n"
            message += f"Returns: ₹{symbol_data['returns']}\n\n"
        msg.body(f"Here is your ")
        msg.body(message)

    elif 'show transaction' in incoming_msg:
        coll_expense = db.collection('users').document(email).collection('expense')
        coll_credit = db.collection('users').document(email).collection('credits')

        latest_expenses = coll_expense.order_by(firestore.Query.DESCENDING).limit(5).stream()
        expense_message = "Here are your latest expenses:\n\n"
        for expense in latest_expenses:
            expense_data = expense.to_dict()
            amount = expense_data['amount']
            expense_message += f"₹{amount}\n"

        latest_credits = coll_credit.order_by(firestore.Query.DESCENDING).limit(5).stream()
        credit_message = "Here are your latest credits:\n\n"
        for credit in latest_credits:
            credit_data = credit.to_dict()
            amount = credit_data['amount']
            credit_message += f"₹{amount}\n"

        transaction_message = f"{expense_message}\n{credit_message}"
        msg.body(transaction_message)



    elif 'show expenditure' in incoming_msg:
        coll_ref = db.collection('users').document(f'{email}').collection('expense')
        expenses = coll_ref.stream()
        expenditure_message = "Here is your expenditure:\n\n"
        for expense in expenses:
            expense_data = expense.to_dict()
            for timestamp, amount in expense_data.items():
                expenditure_message += f"{timestamp}: ₹{amount}\n"
        msg.body(expenditure_message)
    
    if 'bought' in incoming_msg:
        print("match?")
        pattern = r'bought stocks ([a-zA-Z]+) at rs (\d+(?:\.\d+)?) quantity (\d+)'
        match = re.search(pattern, incoming_msg)
        print("match?")
        print(incoming_msg)
        print(f"Match result: {match}")
        if match:
            print("test")
            symbol = match.group(1)
            purchase_price = float(match.group(2))
            quantity = int(match.group(3))
            
            data = {
                'email': email,
                'symbol': symbol,
                'quantity': quantity,
                'purchase_price': purchase_price
            }
            coll_ref = db.collection('users')
            doc_ref = coll_ref.document(email).collection('portfolio').document(symbol)
            doc_ref.set(data)
            msg.body(f"{symbol}, at {purchase_price} of quantity {quantity} added to portfolio")

        else:
            msg.body("Please enter the correct format")



    elif 'show income' in incoming_msg:
        coll_ref = db.collection('users').document(f'{email}').collection('credits')
        credits = coll_ref.stream()
        income_message = "Here is your income:\n\n"
        for credit in credits:
            credit_data = credit.to_dict()
            for timestamp, amount in credit_data.items():
                income_message += f"{timestamp}: ₹{amount}\n"
        msg.body(income_message)

    
    # else:
    #     msg.body(f"Sorry, I didn't get that. Please type 'portfolio' to see your portfolio")

    return str(resp)

# whatsapp_bot()

