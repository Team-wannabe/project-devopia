from flask import jsonify

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

# Example usage
total_investment = 1000000
stock_investment = 600000
bonds_investment = 100000
gold_investment = 50000
cash_investment = 50000
real_estate_investment = 200000

risk = calculate_portfolio_risk(total_investment, stock_investment, bonds_investment, gold_investment, cash_investment, real_estate_investment)
print("Risk associated with the investment portfolio:", risk)