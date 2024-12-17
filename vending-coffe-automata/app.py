from flask import Flask
from automatadfa import dfa
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app) # allow CORS for all domains on all routes.
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/acepted/<input>")
@cross_origin()
def hello_world(input):
    s = input
    h = []

    try:
        for e in dfa.read_input_stepwise(s):
            h.append(str(e))
    except:
        return {
            "isFinalState": False,
            "states": h,
        }
        
    return {
        "isFinalState": True,
        "states": h,
    }


def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
