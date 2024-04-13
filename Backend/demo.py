import random
import statistics

def monte_carlo_risk_assessment(total_overall_investment, total_overall_returns, stocks, bonds, cash, gold, real_estate, others, num_simulations):
    risk_factors = {
        'stocks': 0.9,  
        'bonds': 0.01,   
        'cash': 0.01,    
        'gold': 0.05,    
        'real_estate': 0.02, 
        'others': 0.01    
    }

    simulated_rois = []

    for _ in range(num_simulations):
        simulated_returns = {
            'stocks': random.normalvariate(0, risk_factors['stocks']),
            'bonds': random.normalvariate(0, risk_factors['bonds']),
            'cash': random.normalvariate(0, risk_factors['cash']),
            'gold': random.normalvariate(0, risk_factors['gold']),
            'real_estate': random.normalvariate(0, risk_factors['real_estate']),
            'others': random.normalvariate(0, risk_factors['others'])
        }

        # Calculate simulated total returns based on allocated percentages
        simulated_total_returns = (
            total_overall_investment * (1 + 
                simulated_returns['stocks'] * stocks +
                simulated_returns['bonds'] * bonds +
                simulated_returns['cash'] * cash +
                simulated_returns['gold'] * gold +
                simulated_returns['real_estate'] * real_estate +
                simulated_returns['others'] * others
            )
        )
        
        simulated_roi = (simulated_total_returns - total_overall_investment) / total_overall_investment
        simulated_rois.append(simulated_roi)

    mean_roi = statistics.mean(simulated_rois)
    std_dev_roi = statistics.stdev(simulated_rois)

    actual_roi = (total_overall_returns - total_overall_investment) / total_overall_investment
    risk_assessment = ""

    if actual_roi < mean_roi - std_dev_roi * 1.5:
        risk_assessment = "Very High Risk"
    elif mean_roi - std_dev_roi * 1.5 <= actual_roi < mean_roi - std_dev_roi * 0.5:
        risk_assessment = "High Risk"
    elif mean_roi - std_dev_roi * 0.5 <= actual_roi < mean_roi + std_dev_roi * 0.5:
        risk_assessment = "Average Risk"
    elif mean_roi + std_dev_roi * 0.5 <= actual_roi < mean_roi + std_dev_roi * 1.5:
        risk_assessment = "Below Average Risk"
    else:
        risk_assessment = "Low Risk"

    return {
        'Mean ROI': mean_roi,
        'Standard Deviation of ROI': std_dev_roi,
        'Actual ROI': actual_roi,
        'Risk Assessment': risk_assessment
    }

result = monte_carlo_risk_assessment(
    total_overall_investment=100000,
    total_overall_returns=80000,    
    stocks=0.4,
    bonds=0.3,
    cash=0.1,
    gold=0.1,
    real_estate=0.1,
    others=0.0,
    num_simulations=100
)

print(result)
