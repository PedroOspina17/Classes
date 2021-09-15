from os import abort
import time
from flask import Flask, json, jsonify, request
from flask.wrappers import Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

userList = [
    {"id":1, "name": "Pedro", "lastName": "Ospina", "age": 25, "userName": "PedroOspina17", "password": "Admin1234", "role":"Admin"},
    {"id":2, "name": "Diocelina", "lastName": "Graciano", "age": 65, "userName": "Diosferina", "password": "1234", "role":"Employee"},
    {"id":3, "name": "David", "lastName": "Ossa", "age": 15, "userName": "DavidOO", "password": "4321", "role":"Employee"},
]

@app.route("/",methods=["GET"])
def index():
    print("The index method was called")
    
    return '''<h1>Security api welcome page. </h1>
    <p>
        This api contains the following endpoints:
        <ul>
            <li>URL: /Healthcheck - Type: GET: to identify if the api is working with get. </li>
            <li>URL: /LogIn - Type: POST: to validate if the user is register in the application and verify if the password is right. 
            <pre><code data-language="json">
                {
                    "password": "Admin1234", 
                    "userName": "PedroOspina172"
                }</code></pre></li>
            <li>URL: /GetUsers - Type: GET: to get all the existing users.</li>
            <li>URL: /GetUser - Type: GET: to verify if a user already exists by 'userName'</li>
            <li>URL: /CreateUser - Type: POST: to register a new user.  
            <pre><code data-language="json">
                {
                    "age": 3, 
                    "lastName": "Ospina 2", 
                    "name": "Pedro 2", 
                    "password": "Admin1234", 
                    "userName": "PedroOspina172"
                }</code></pre></li>
            <li>URL: /DeleteUser - Type: POST: to eliminate the user specified. 
            <pre><code data-language="json">
                {
                    "userName": "PedroOspina172"
                }</code></pre></li>
        </ul>
        <b>Example: </b> http://3.14.144.130/Healthcheck <a href="http://3.14.144.130/Healthcheck" target="_blank">Test healthcheck from browser</a>
    </p>

    '''

@app.route("/Healthcheck",methods=["GET"])
def healthCheckGET():
    print("The method healthCheckGET was called")
    return jsonify({"message" : "The api is working... Asking from GET method"})

@app.route("/GetUsers",methods=["GET"])
def GetUsers():
    print("Showing users ... ")
    print(userList)
    return jsonify({"users": userList})

@app.route("/DeleteUser",methods=["POST"])
def DeleteUser():
    
    data = request.get_json(force=True)
    print(data)
    if("userName" in data):
        print("Checking the user name ... " + data["userName"] )
        for element in userList:
            if(element["userName"] == data["userName"]):
                userList.remove(element)    
                return jsonify({"result": True, "message": "The user was deleted"})
        return jsonify({"result": False, "message": "The user was not found"})
    else:
        return jsonify({"result": False, "message": "The user name was not sent"})

@app.route("/GetUser",methods=["GET"])
def CheckUser():
    # userName = request.args.get("userName")
    userName = request.args.get("userName").lower().strip()
    print(userName)
    print("Checking the user name ... " + userName )
    result = [user for user in userList if userName == user["userName"].lower()]
    print(result)
    if(len(result) > 0):
        return jsonify({"result": True, "user": result[0], "message":"The user was found."})
    else:
        return jsonify({"result":False, "message":"The user was not found."})

@app.route("/CreateUser",methods=["POST"])
def SignUp():
    print("Saving info... ")
    data = request.get_json(force=True)
    if(not ("userName" in data and "name" in data and "lastName" in data and "age" in data and "password" in data  )):
        return jsonify({"result":False, "message":"Please provide all the required fields."})

    if(len([user for user in userList if data["userName"].lower() == user["userName"].lower()])> 0):
        return jsonify({"result": False, "message" : "The username already exists."})

    if("role" not in data):
        data["role"] = "Employee"

    data["id"] = len(userList) + 1

    userList.append(data)
    print(data)
    return jsonify({"result": True, "message" : "The user was saved successfully", "userInfo": data})

@app.route("/LogIn",methods=["POST"])
def SingIn():
    # time.sleep(5)
    data = request.get_json(force=True)
    if("userName" not in data or "password" not in data):
        return Response("The username or password was not provided", 400)

    userName = data["userName"].strip().lower()
    password = data["password"].strip().lower()
    print("Checking the user name ... " + userName + " and password ... " + password )
    users = [user for user in userList if user["userName"].lower() == userName and user["password"].lower() == password]
    if(len(users)> 0):
        result = True
        users = users[0]
        del users["password"]
    else:
        result = False
        users = None
    return jsonify({"result": result, "user": users})


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=80)