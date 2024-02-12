import json
import sys
print(sys.path)

from flask import Flask,request, jsonify
from flask_cors import CORS

from src.controller.person import PersonController
#from backend.controller.person import PersonController



#main
app = Flask(__name__)
CORS(app)


@app.route('/')
def t():
    return "Hello"

@app.route('/test', methods=['GET'])
def people():
    if request.method == 'GET':
        return PersonController().getAll()
    
    else:
        return jsonify("Not Supported"), 405



if __name__ == '__main__':
    app.run(debug=1)