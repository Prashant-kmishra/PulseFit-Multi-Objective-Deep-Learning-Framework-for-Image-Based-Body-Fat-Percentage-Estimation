def calculate_bmi(weight_kg: float, height_cm: float) -> float:
    height_m = height_cm / 100.0
    return weight_kg / (height_m ** 2)

def classify_bmi(bmi: float) -> str:
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 25.0:
        return "Normal Weight"
    elif 25.0 <= bmi < 30.0:
        return "Overweight"
    else:
        return "Obese"

def calculate_body_fat(bmi: float, age: int, gender_num: int) -> float:
    # gender_num: 1 = male, 0 = female
    bf = (1.20 * bmi) + (0.23 * float(age)) - (10.8 * float(gender_num)) - 5.4
    return max(3.0, bf)

def classify_body_fat(bf: float, gender_num: int) -> str:
    if gender_num == 1:  # Male
        if bf < 6: return "Essential Fat"
        elif bf <= 13: return "Athletic"
        elif bf <= 17: return "Fitness"
        elif bf <= 24: return "Average"
        else: return "Obese"
    else:  # Female
        if bf < 14: return "Essential Fat"
        elif bf <= 20: return "Athletic"
        elif bf <= 24: return "Fitness"
        elif bf <= 31: return "Average"
        else: return "Obese"
