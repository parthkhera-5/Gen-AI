from flask import Blueprint, request, jsonify

from rag.initialize import rag_chain

from utils.bmi import calculate_bmi, create_bmi_query
from utils.water import calculate_water, create_water_query


tool = Blueprint("tool", __name__)


# --------------------------------------------------
# BMI TOOL
# --------------------------------------------------

@tool.route("/bmi", methods=["POST"])
def bmi():

    try:

        data = request.get_json()

        height = float(data["height"])
        weight = float(data["weight"])

        result = calculate_bmi(height, weight)

        query = create_bmi_query(result)

        answer = rag_chain.invoke(
            {
                "question": query
            }
        )

        return jsonify(
            {
                "success": True,
                "bmi": result["bmi"],
                "category": result["category"],
                "answer": answer
            }
        )

    except Exception as e:

        return jsonify(
            {
                "success": False,
                "error": str(e)
            }
        ), 500


# --------------------------------------------------
# WATER TOOL
# --------------------------------------------------

@tool.route("/water", methods=["POST"])
def water():

    try:

        data = request.get_json()

        weight = float(data["weight"])

        activity = data["activity"]

        climate = data["climate"]

        result = calculate_water(
            weight,
            activity,
            climate
        )

        query = create_water_query(result)

        answer = rag_chain.invoke(
            {
                "question": query
            }
        )

        return jsonify(
            {
                "success": True,
                "liters": result["liters"],
                "glasses": result["glasses"],
                "answer": answer
            }
        )

    except Exception as e:

        return jsonify(
            {
                "success": False,
                "error": str(e)
            }
        ), 500