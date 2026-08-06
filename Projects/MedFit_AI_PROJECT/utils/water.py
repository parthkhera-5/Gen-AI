def calculate_water(weight, activity, climate):
    """
    weight : kilograms
    activity : low | moderate | high
    climate : normal | hot
    """

    # Base water requirement
    liters = weight * 35 / 1000

    # Activity adjustment
    if activity.lower() == "moderate":
        liters += 0.5

    elif activity.lower() == "high":
        liters += 1.0

    # Climate adjustment
    if climate.lower() == "hot":
        liters += 0.5

    liters = round(liters, 1)

    glasses = round(liters * 1000 / 250)

    return {
        "weight": weight,
        "activity": activity,
        "climate": climate,
        "liters": liters,
        "glasses": glasses
    }


def create_water_query(result):

    query = f"""
Weight {result['weight']} kg

Daily Water Intake {result['liters']} liters

Approximately {result['glasses']} glasses

Activity {result['activity']}

Climate {result['climate']}

Hydration

Water Recommendation

Healthy Lifestyle
"""

    return query