from flask import Flask, jsonify, request
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
            <li>URL: /GetUsers - Type: GET: to get all the existing users.</li>
            <li>URL: /GetUser - Type: GET: to verify if a user already exists by username</li>
            <li>URL: /SingUp - Type: POST: to register a new user. </li>
            <li>URL: /SingIn - Type: POST: to validate if the user is register in the application and verify if the password is right. </li>
        </ul>
        <b>Example: </b> http://3.14.144.130/Healthcheck <a href="http://3.14.144.130/Healthcheck">Test healthcheck from browser</a>
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

@app.route("/GetUser",methods=["GET"])
def CheckUser():
    # userName = request.args.get("userName")
    userName = request.args.get("userName").lower().strip()
    print(userName)
    print("Checking the user name ... " + userName )
    result = [user for user in userList if userName == user["userName"].lower()]
    print(result)
    return jsonify({"result": userName in result, "user": result})

@app.route("/SingUp",methods=["POST"])
def SignUp():
    print("Saving info... ")
    data = request.get_json(force=True)
    if(len([user for user in userList if data["userName"] == user["userName"].lower()])> 0):
        return jsonify({"result": False, "message" : "The username already exists."})

    userList.append(data)
    return jsonify({"result": True, "message" : "The user was saved successfully"})

@app.route("/SingIn",methods=["POST"])
def SingIn():
    userName = request.get_json(force=True)["userName"].strip().lower()
    password = request.get_json(force=True)["password"].strip().lower()
    print("Checking the user name ... " + userName + " and password ... " + password )
    result = [user for user in userList if user["userName"].lower() == userName and user["password"].lower() == password]
    return jsonify({"result": len(result) > 0, "user": result})


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=80)