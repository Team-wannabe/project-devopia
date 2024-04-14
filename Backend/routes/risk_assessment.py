from flask import Flask, request, redirect, Blueprint, render_template, jsonify
import requests
from datetime import datetime
from credentials.firebase_config import db
# import numpy as np
# from sklearn.linear_model import LinearRegression
import statistics
import random

# risk_levels = {
#     'stocks': 5,
#     'bonds': 4,
#     'cash': 1,
#     'gold': 3,
#     'real_estate': 2,
#     'others': 2
# }

risk_assessment_bp = Blueprint('risk_assessment', __name__)

# @risk_assessment_bp.route('/risk_assessment', methods=['GET', 'POST'])
# def monte_carlo_risk_assessment():
#     risk_factors = {
#         'stocks': 0.9,  
#         'bonds': 0.01,   
#         'cash': 0.01,    
#         'gold': 0.05,    
#         'real_estate': 0.02, 
#         'others': 0.01    
#     }
#     total_overall_investment=100000
#     total_overall_returns=80000 
#     stocks=0.4
#     bonds=0.3
#     cash=0.1
#     gold=0.1
#     real_estate=0.1
#     others=0.0
#     num_simulations=1000

#     simulated_rois = []

#     for _ in range(num_simulations):
#         simulated_returns = {
#             'stocks': random.normalvariate(0, risk_factors['stocks']),
#             'bonds': random.normalvariate(0, risk_factors['bonds']),
#             'cash': random.normalvariate(0, risk_factors['cash']),
#             'gold': random.normalvariate(0, risk_factors['gold']),
#             'real_estate': random.normalvariate(0, risk_factors['real_estate']),
#             'others': random.normalvariate(0, risk_factors['others'])
#         }

#         # Calculate simulated total returns based on allocated percentages
#         simulated_total_returns = (
#             total_overall_investment * (1 + 
#                 simulated_returns['stocks'] * stocks +
#                 simulated_returns['bonds'] * bonds +
#                 simulated_returns['cash'] * cash +
#                 simulated_returns['gold'] * gold +
#                 simulated_returns['real_estate'] * real_estate +
#                 simulated_returns['others'] * others
#             )
#         )
        
#         simulated_roi = (simulated_total_returns - total_overall_investment) / total_overall_investment
#         simulated_rois.append(simulated_roi)

#     mean_roi = statistics.mean(simulated_rois)
#     std_dev_roi = statistics.stdev(simulated_rois)

#     actual_roi = (total_overall_returns - total_overall_investment) / total_overall_investment
#     risk_assessment = ""

#     if actual_roi < mean_roi - std_dev_roi * 1.5:
#         risk_assessment = "Very High Risk"
#     elif mean_roi - std_dev_roi * 1.5 <= actual_roi < mean_roi - std_dev_roi * 0.5:
#         risk_assessment = "High Risk"
#     elif mean_roi - std_dev_roi * 0.5 <= actual_roi < mean_roi + std_dev_roi * 0.5:
#         risk_assessment = "Average Risk"
#     elif mean_roi + std_dev_roi * 0.5 <= actual_roi < mean_roi + std_dev_roi * 1.5:
#         risk_assessment = "Below Average Risk"
#     else:
#         risk_assessment = "Low Risk"

#     return jsonify({
#         'Mean ROI': mean_roi,
#         'Standard Deviation of ROI': std_dev_roi,
#         'Actual ROI': actual_roi,
#         'Risk Assessment': risk_assessment
#     })




# # def prepare_data(total_overall_investment, stocks, bonds, cash, gold, real_estate, others):
# #     total_investment = stocks + bonds + cash + gold + real_estate + others
# #     proportions = {
# #         'stocks': stocks / total_investment,
# #         'bonds': bonds / total_investment,
# #         'cash': cash / total_investment,
# #         'gold': gold / total_investment,
# #         'real_estate': real_estate / total_investment,
# #         'others': others / total_investment
# #     }
    
# #     features = np.array(list(proportions.values())).reshape(1, -1)
# #     target = np.array([sum(risk_levels[asset] * proportion for asset, proportion in proportions.items())])
# #     return features, target


# # def train_model():
    
# #     X_train = np.array([[0.8, 0.1, 0.05, 0.05, 0.0, 0.0]]) 
# #     y_train = np.array([4.5]) 
# #     model = LinearRegression().fit(X_train, y_train)
# #     return model


# # def risk_assessment(total_overall_investment, stocks, bonds, cash, gold, real_estate, others):
# #     features, target = prepare_data(total_overall_investment, stocks, bonds, cash, gold, real_estate, others)
# #     model = train_model() 
# #     predicted_risk = model.predict(features)
# #     return predicted_risk[0]

# # # Example usage
# # total_overall_investment = 1000000
# # stocks = 800000
# # bonds = 100000
# # cash = 50000
# # gold = 50000
# # real_estate = 50000
# # others = 0

# # risk_level = risk_assessment(total_overall_investment, stocks, bonds, cash, gold, real_estate, others)
# # print(f"Predicted Risk Level: {risk_level}")