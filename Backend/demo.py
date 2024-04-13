import requests
from datetime import datetime
import time
import json
from twelvedata import TDClient


symbol = input("Enter a stock symbol: ")
url = f'http://localhost:3000/api/equity/{symbol}'
r = requests.get(url)
data = r.json()
lastprice = data.get('priceInfo', {}).get('lastPrice')

print(lastprice)
