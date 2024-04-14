from flask import Flask, request, redirect, Blueprint, render_template, jsonify
import requests
from datetime import datetime
from credentials.firebase_config import db
import numpy as np
from sklearn.linear_model import LinearRegression
import statistics
import random


risk_assess_bp = Blueprint('risk_assess', __name__)


@risk_assess_bp.route('/risk_assess', methods=['GET', 'POST'])
def calculate_portfolio_risk(total_investment, stock_investment, bonds_investment, gold_investment, cash_investment, real_estate_investment):
    stock_percentage = stock_investment / total_investment
    bonds_percentage = bonds_investment / total_investment
    gold_percentage = gold_investment / total_investment
    cash_percentage = cash_investment / total_investment
    real_estate_percentage = real_estate_investment / total_investment

    stock_risk_coefficient = 0.8
    bonds_risk_coefficient = 0.5
    gold_risk_coefficient = 0.3
    cash_risk_coefficient = 0.1
    real_estate_risk_coefficient = 0.6

    stock_risk = stock_percentage * stock_risk_coefficient
    bonds_risk = bonds_percentage * bonds_risk_coefficient
    gold_risk = gold_percentage * gold_risk_coefficient
    cash_risk = cash_percentage * cash_risk_coefficient
    real_estate_risk = real_estate_percentage * real_estate_risk_coefficient

    total_risk = stock_risk + bonds_risk + gold_risk + cash_risk + real_estate_risk

    if 0.0 <= total_risk <= 0.35:
        risk_level = 'very Low Risk portfolio' 
    elif 0.36 <= total_risk <= 0.5:
        risk_level = 'Low Risk portfolio'
    elif 0.51 <= total_risk <= 0.65:
        risk_level = 'moderate Risk portfolio'
    elif 0.66 <= total_risk <= 0.80:
        risk_level = 'High Risk portfolio'
    else:
        risk_level = 'very High Risk portfolio'

    print(risk_level)
    return jsonify({'risk_level': risk_level, 'total_risk': total_risk})


total_investment = 100000  # Total investment amount in your base currency (e.g., INR, USD)
stock_investment = 40000  # Investment in stocks
bonds_investment = 20000  # Investment in bonds
gold_investment = 15000  # Investment in gold
cash_investment = 20000  # Investment in cash
real_estate_investment = 5000  # Investment in real estate

risk_assess_bp.calculate_portfolio_risk(total_investment, stock_investment, bonds_investment, gold_investment, cash_investment, real_estate_investment)