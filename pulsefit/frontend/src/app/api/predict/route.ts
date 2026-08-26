import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  
  // Try to hit the real Python FastAPI Backend first
  try {
    const backendRes = await fetch("http://localhost:8000/api/predict", {
      method: "POST",
      body: formData,
    });
    
    if (backendRes.ok) {
      const data = await backendRes.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    // Backend is not running or unreachable, fallback to Mock Data
    console.log("Python backend not found. Falling back to Mock API.");
  }

  // === MOCK FALLBACK LOGIC ===
  const ageStr = formData.get('age') as string;
  const genderStr = formData.get('gender') as string;
  const image = formData.get('image') as File;

  if (!image) {
    return NextResponse.json({ detail: "Image is required" }, { status: 400 });
  }

  const age = parseInt(ageStr) || 25;
  const gender = genderStr || "Male";
  const gender_num = gender.toLowerCase() === "male" ? 1 : 0;

  const seed = image.size % 100; 
  
  const height_cm = gender_num === 1 ? 170 + (seed * 0.2) : 158 + (seed * 0.2);
  const weight_kg = gender_num === 1 ? 65 + (seed * 0.3) : 55 + (seed * 0.25);
  
  const height_m = height_cm / 100.0;
  const bmi = weight_kg / (height_m * height_m);
  
  let body_fat_pct = (1.20 * bmi) + (0.23 * age) - (10.8 * gender_num) - 5.4;
  body_fat_pct = Math.max(3.0, body_fat_pct);

  let bmi_category = "Obese";
  if (bmi < 18.5) bmi_category = "Underweight";
  else if (bmi < 25.0) bmi_category = "Normal Weight";
  else if (bmi < 30.0) bmi_category = "Overweight";

  let bf_category = "Obese";
  if (gender_num === 1) {
    if (body_fat_pct < 6) bf_category = "Essential Fat";
    else if (body_fat_pct <= 13) bf_category = "Athletic";
    else if (body_fat_pct <= 17) bf_category = "Fitness";
    else if (body_fat_pct <= 24) bf_category = "Average";
  } else {
    if (body_fat_pct < 14) bf_category = "Essential Fat";
    else if (body_fat_pct <= 20) bf_category = "Athletic";
    else if (body_fat_pct <= 24) bf_category = "Fitness";
    else if (body_fat_pct <= 31) bf_category = "Average";
  }

  let diet = [];
  let exercise = [];
  if (bf_category === "Essential Fat") {
    diet = ["Ensure you are in a slight calorie surplus.", "Focus on nutrient-dense foods and healthy fats.", "Maintain adequate protein intake."];
    exercise = ["Focus on resistance training to build muscle mass.", "Limit excessive cardio.", "Ensure adequate recovery and sleep."];
  } else if (bf_category === "Athletic") {
    diet = ["Maintain calorie intake to support activity level.", "High protein (1.8-2.2g/kg) to preserve lean mass.", "Time carbohydrates around workouts."];
    exercise = ["Performance and maintenance focus.", "Periodized strength training.", "Incorporate mobility and active recovery."];
  } else if (bf_category === "Fitness") {
    diet = ["Maintain a slight deficit or maintenance calories depending on goals.", "Prioritize lean proteins and vegetables.", "Stay hydrated."];
    exercise = ["Balanced mix of strength and hypertrophy.", "2-3 days of moderate cardio.", "Consistent training schedule."];
  } else if (bf_category === "Average") {
    diet = ["Aim for a moderate calorie deficit if weight loss is desired.", "Increase vegetable intake for volume.", "Reduce processed foods and added sugars."];
    exercise = ["Progressive resistance training 3x/week.", "Incorporate LISS or HIIT cardio 2-3x/week.", "Increase daily step count."];
  } else {
    diet = ["Aim for a sustainable calorie deficit.", "Focus on high-satiety foods (protein and fiber).", "Track intake to build awareness."];
    exercise = ["Start with low-impact steady-state cardio (walking, swimming).", "Gradually introduce full-body resistance training.", "Consult a professional."];
  }

  const mockResponse = {
    profile: { age, gender },
    metrics: {
      height_cm: parseFloat(height_cm.toFixed(1)),
      weight_kg: parseFloat(weight_kg.toFixed(1)),
      bmi: parseFloat(bmi.toFixed(1)),
      bmi_category,
      body_fat_pct: parseFloat(body_fat_pct.toFixed(1)),
      body_fat_category: bf_category
    },
    recommendation: {
      summary: `Your current body fat percentage places you in the ${bf_category} category.`,
      diet,
      exercise,
      disclaimer: "PulseFit provides fitness estimates, not medical diagnoses. Consult a professional for personalized health advice."
    },
    silhouette_base64: Buffer.from(await image.arrayBuffer()).toString('base64'),
    is_mock: true
  };

  await new Promise(resolve => setTimeout(resolve, 2500));

  return NextResponse.json(mockResponse);
}
