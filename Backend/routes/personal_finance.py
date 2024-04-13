from flask import Flask, request, redirect, Blueprint, render_template, jsonify
import requests
from datetime import datetime
import datetime
from credentials.firebase_config import db
from twilio.twiml.messaging_response import MessagingResponse
import re
from firebase_admin import firestore

personal_finance_bp = Blueprint('personal_finance', __name__)

@personal_finance_bp.route('/expense', methods=['GET', 'POST'])
def expense():
    email = 'adityachavan271@gmail.com'
    coll_ref = db.collection('users').document(f'{email}').collection('expense')
    docs = coll_ref.stream()
    data = []
    for doc in docs:
        data.append({'data': doc.to_dict()})
        

    return data

@personal_finance_bp.route('/income', methods=['GET', 'POST'])
def income():
    email = 'adityachavan271@gmail.com'
    coll_ref = db.collection('users').document(f'{email}').collection('credits')
    docs = coll_ref.stream()
    data = []
    for doc in docs:
        data.append({'data': doc.to_dict()})
        
    return data