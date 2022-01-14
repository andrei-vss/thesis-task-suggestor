from flask import render_template, Blueprint, jsonify, request

hello_blueprint = Blueprint('start', __name__)
from RMSuggestor import RMSuggestor

sugg = RMSuggestor()
sugg.start()


@hello_blueprint.route('/')
def index():
    return render_template("index.html")


@hello_blueprint.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    toPredict = data.get('toPredict')

    return jsonify(
        candidates=sugg.predict(toPredict)
    )
