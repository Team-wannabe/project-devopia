from flask import Flask, Blueprint
import os
from routes.stock import stock_bp

app = Flask(__name__)
app.secret_key = "devopia"

app.register_blueprint(stock_bp)



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))