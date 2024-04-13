from flask import Flask, request, redirect, Blueprint, render_template, jsonify
import requests
from datetime import datetime
from credentials.firebase_config import db
from twilio.twiml.messaging_response import MessagingResponse



whatsapp_bot_bp = Blueprint('whatsapp_bot', __name__)

@whatsapp_bot_bp.route('/whatsappbot', methods=['GET', 'POST'])
def whatsapp_bot():
    incoming_msg = request.values.get('Body', '').lower()
    resp = MessagingResponse()
    msg = resp.message()
    responded = False
    if 'sent' in incoming_msg or 'sending' in incoming_msg or 'expense' in incoming_msg or 'add to expenditure' in incoming_msg or 'adding' in incoming_msg:
        msg.body(f"adding expenditure to your account")
    if  'income' in incoming_msg or 'adding' in incoming_msg:
        msg.body(f"crediting to your account expense page")
    if 'portfolio' in incoming_msg:
        msg.body(f"Here is your portfolio")
    if 'show transaction' in incoming_msg:
        msg.body(f"Here is your transaction")
    if 'show expenditure' in incoming_msg:
        msg.body(f"Here is your expenditure")
    # else:
    #     msg.body(f"Sorry, I didn't get that. Please type 'portfolio' to see your portfolio")

    return str(resp)

# whatsapp_bot()

