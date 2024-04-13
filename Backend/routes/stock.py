from flask import Flask, request, redirect, Blueprint, render_template, jsonify
import requests
from datetime import datetime

stock_bp = Blueprint('stock', __name__)

@stock_bp.route('/stock', methods=['GET'])
def stock():
    demo = "5O6XB3Y5ZVXQTVMD"
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey={demo}'
    r = requests.get(url)
    data = r.json()

    print(data)
    message = {
        'message': 'Hello, World!'
    }
    return data
