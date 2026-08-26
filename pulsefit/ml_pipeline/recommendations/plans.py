def get_recommendation(bf_category: str, gender: int, bmi_category: str) -> dict:
    if bf_category == "Essential Fat":
        diet = ["Ensure you are in a slight calorie surplus.", "Focus on nutrient-dense foods and healthy fats.", "Maintain adequate protein intake."]
        exercise = ["Focus on resistance training to build muscle mass.", "Limit excessive cardio.", "Ensure adequate recovery and sleep."]
    elif bf_category == "Athletic":
        diet = ["Maintain calorie intake to support activity level.", "High protein (1.8-2.2g/kg) to preserve lean mass.", "Time carbohydrates around workouts."]
        exercise = ["Performance and maintenance focus.", "Periodized strength training.", "Incorporate mobility and active recovery."]
    elif bf_category == "Fitness":
        diet = ["Maintain a slight deficit or maintenance calories depending on goals.", "Prioritize lean proteins and vegetables.", "Stay hydrated."]
        exercise = ["Balanced mix of strength and hypertrophy.", "2-3 days of moderate cardio.", "Consistent training schedule."]
    elif bf_category == "Average":
        diet = ["Aim for a moderate calorie deficit if weight loss is desired.", "Increase vegetable intake for volume.", "Reduce processed foods and added sugars."]
        exercise = ["Progressive resistance training 3x/week.", "Incorporate LISS or HIIT cardio 2-3x/week.", "Increase daily step count."]
    else: # Obese
        diet = ["Aim for a sustainable calorie deficit.", "Focus on high-satiety foods (protein and fiber).", "Track intake to build awareness."]
        exercise = ["Start with low-impact steady-state cardio (walking, swimming).", "Gradually introduce full-body resistance training.", "Consult a professional for a personalized, safe plan."]

    return {
        "summary": f"Your current body fat percentage places you in the {bf_category} category.",
        "diet": diet,
        "exercise": exercise,
        "disclaimer": "PulseFit provides fitness estimates, not medical diagnoses. Consult a professional for personalized health advice."
    }
