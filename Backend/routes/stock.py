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

# @stock_bp.route('/adding-to-portfolio/', methods=['GET', 'POST', 'OPTIONS'])
@stock_bp.route('/adding-to-portfolio', methods=['OPTIONS', 'POST'])
def adding_to_portfolio():
    if request.method == 'OPTIONS':
        # Handle preflight request by returning the necessary CORS headers
        response = jsonify({'message': 'Preflight request handled successfully'})
        response.headers.add('Access-Control-Allow-Origin', '*')  # Change '*' to your allowed origin
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response

    # Handle POST request to add data to the portfolio
    data = request.get_json()
    email = 'adityachavan271@gmail.com'
    symbol = data.get('stock')
    quantity = data.get('quantity')
    purchase_price = data.get('price')

    if None in (symbol, quantity, purchase_price):
        return jsonify({'error': 'Incomplete data provided'}), 400

    try:
        investment = float(quantity) * float(purchase_price)
    except ValueError:
        return jsonify({'error': 'Invalid quantity or purchase price provided'}), 400

    data = {
        'email': email,
        'symbol': symbol,
        'quantity': quantity,
        'purchase_price': purchase_price,
        # 'investment': investment  # Include investment in the data to be stored
    }
    print(data)

    coll_ref = db.collection('users')
    doc_ref = coll_ref.document(email).collection('portfolio').document(symbol)

    doc_ref.set(data)
    return jsonify({'message': 'Data added to portfolio'}), 200

@stock_bp.route('/your-portfolio', methods=['GET', 'POST'])
def your_portfolio():

    # email = request.args.get('email')
    # if not email:
        # return jsonify({'error': 'Email is required'}), 400
    email = 'adityachavan271@gmail.com'
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