from flask import Flask, Blueprint
import os
from routes.stock import stock_bp
from chatbot.whatsapp_chatbot import whatsapp_bot_bp
from routes.personal_finance import personal_finance_bp
from flask_cors import CORS
from routes.risk_assessment import risk_assessment_bp


app = Flask(__name__)
app.secret_key = "devopia"
# CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
CORS(app)

app.register_blueprint(risk_assessment_bp)
app.register_blueprint(stock_bp)
app.register_blueprint(whatsapp_bot_bp)
app.register_blueprint(personal_finance_bp)




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))