from math import pow


def calculate_bmi(height, weight):
    """
    height : centimeters
    weight : kilograms
    """

    height_m = height / 100

    bmi = round(weight / pow(height_m, 2), 1)

    if bmi < 18.5:
        category = "Underweight"

    elif bmi < 25:
        category = "Normal Weight"

    elif bmi < 30:
        category = "Overweight"

    else:
        category = "Obese"

    return {
        "height": height,
        "weight": weight,
        "bmi": bmi,
        "category": category
    }


def create_bmi_query(result):

    query = f"""
BMI {result['bmi']}

Category {result['category']}

Height {result['height']} cm

Weight {result['weight']} kg

Healthy BMI

Health Recommendation

Balanced Diet

Exercise
"""

    return query