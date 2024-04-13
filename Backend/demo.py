import requests
from datetime import datetime
import time
import json
from twelvedata import TDClient

url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=YESBANK&interval=5min&apikey=5O6XB3Y5ZVXQTVMD'
r = requests.get(url)
data = r.json()

print(data)
