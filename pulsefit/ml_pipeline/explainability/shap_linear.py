def explain_deurenberg(bmi: float, age: int, gender_num: int):
    # body_fat_pct = (1.20 * BMI) + (0.23 * age) - (10.8 * gender_num) - 5.4
    contributions = {
        "Base (Intercept)": -5.4,
        "BMI Contribution": 1.20 * bmi,
        "Age Contribution": 0.23 * age,
        "Gender Contribution": -10.8 * gender_num
    }
    
    total = sum(contributions.values())
    
    # Floor to 3.0 if necessary
    if total < 3.0:
        contributions["Floor Adjustment"] = 3.0 - total
        total = 3.0
        
    # Formatting for frontend charting
    waterfall = []
    for k, v in contributions.items():
        waterfall.append({"name": k, "value": round(v, 2)})
        
    return {
        "waterfall": waterfall,
        "total_body_fat": round(total, 2)
    }
