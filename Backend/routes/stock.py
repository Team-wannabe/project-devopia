from flask import Flask, request, redirect, Blueprint, render_template, jsonify
import requests
from datetime import datetime
from credentials.firebase_config import db

stock_bp = Blueprint('stock', __name__)

""""HELPER FUNCTIONS"""
def fetch_current_price(symbol):
    # symbol = input("Enter a stock symbol: ")
    url = f'http://localhost:3000/api/equity/{symbol}'
    r = requests.get(url)
    data = r.json()
    lastprice = data.get('priceInfo', {}).get('lastPrice')
    return lastprice

# def calculate_returns(quantity, purchase_price, current_price):
#     investment = quantity * purchase_price
#     current_value = quantity * current_price
#     return current_value - investment





"""ROUTES"""
# @stock_bp.route('/api/equity', methods=['GET'])

@stock_bp.route('/adding-to-portfolio/', methods=['GET', 'POST'])
def adding_to_portfolio():
    # data = {}
    global email
    email = 'adityachavan271@gmail.com'
    symbol = 'AXISBANK'
    quantity = 100
    purchase_price = 100

    data = {
        'email': email,
        'symbol': symbol,
        'quantity': quantity,
        'purchase_price': purchase_price
    }
    
    coll_ref = db.collection('users')
    doc_ref = coll_ref.document(email).collection('portfolio').document(symbol)

    doc_ref.set(data)
    return jsonify({'message': 'Data added to portfolio'})

@stock_bp.route('/your-portfolio', methods=['GET', 'POST'])
def your_portfolio():

    # email = request.args.get('email')
    # if not email:
        # return jsonify({'error': 'Email is required'}), 400
    
    coll_ref = db.collection('users').document(email).collection('portfolio')
    docs = coll_ref.stream()

    total_investment, total_current_value, total_return = 0, 0, 0
    symbols_data = []  # Initialize symbols_data as an empty list outside the loop

    for doc in docs:
        symbol_data = doc.to_dict()
        symbol = symbol_data['symbol']
        quantity = symbol_data['quantity']
        purchase_price = symbol_data['purchase_price']
        
        # Fetch current price using your API or function
        current_price = fetch_current_price(symbol)

        investment = quantity * purchase_price
        current_value = quantity * current_price
        returns = current_value - investment

        # Append each symbol's data to symbols_data list
        symbols_data.append({
            'symbol': symbol,
            'quantity': quantity,
            'purchase_price': purchase_price,
            'current_price': current_price,
            'investment': investment,
            'returns': returns,
            'current_value': current_value
        })

        total_investment += investment
        total_return += returns
        total_current_value += current_value

    overall_data = {
        'total_investment': total_investment,
        'total_return': total_return,
        'total_current_value': total_current_value,
        'symbols_data': symbols_data
    }

    return overall_data