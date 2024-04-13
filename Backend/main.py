from flask import Flask, Blueprint
import os
from routes.stock import stock_bp
from chatbot.whatsapp_chatbot import whatsapp_bot_bp
from routes.personal_finance import personal_finance_bp

app = Flask(__name__)
app.secret_key = "devopia"

app.register_blueprint(stock_bp)
app.register_blueprint(whatsapp_bot_bp)
app.register_blueprint(personal_finance_bp)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))