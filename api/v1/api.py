import flask
import json
from flask_cors import CORS

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)


@app.route('/ri-analyser/api/v1/getri',methods=['GET','POST'])
def get_ri():
    with open('../test_data/r-limit.json') as f:
      data = json.load(f)
    return data

app.run()
