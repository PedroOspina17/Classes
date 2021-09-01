from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

dataStored = []

@app.route("/",methods=["GET"])
def healthCheckGET():
    print("The index method was called")
    
    return '''<h1>First api welcome page. </h1>
    <p>
        This api contains the following endpoints:
        <ul>
            <li>URL: /Healthcheck - Type: GET: to identify if the api is working with get. <a href="http://3.14.144.130/healthcheck">Test healthcheck</a></li>
            <li>URL: /Healthcheck - Type: POST: to identify if the api is working with post.</li>
            <li>URL: /SaveInfo - Type: POST: to test sending data. Send in the data a json </li>
            <li>URL: /GetInfo - Type: GET: to test getting the data sent. </li>
        </ul>
    </p>

    '''

@app.route("/Healthcheck",methods=["GET"])
def Get():
    print("The method Get was called")
    print(request.args)
    return jsonify({"isAlive": True,"message" : "The api is working... Asking from GET method"})

@app.route("/Healthcheck",methods=["POST"])
def Post():
    print("The method Post was called" )    
    return jsonify({"message" : "The api is working... Asking from POST method"})

@app.route("/SaveInfo",methods=["POST"])
def SaveInfo():
    print("The method SaveInfo was called with data: " )    
    data = request.get_json(force=True) 
    dataStored.append(data)
    print(data)
    print(dataStored)
    return jsonify({"message" : "The api is working... Asking from POST method. You can verify the data here: http://3.14.144.130/"})

@app.route("/GetInfo",methods=["GET"])
def GetInfo():
    print("The method GetInfo was called " )   
    print(dataStored)
    return jsonify({"message" : "The information was retrieved successfully", "data": dataStored})


if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0", port=80)