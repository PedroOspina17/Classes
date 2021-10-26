$(document).ready(function () {

    var security = localStorage.getItem("Security_validation");

    if (security == null) {
        window.location.href = "09.loggin.html"
    }

    loadTable();
    if (localStorage.getItem("Role") == 'Admin') {
        $("#Admin").append(`<a class="nav-link active" href="09.listUsers.html">List Users</a>`);
    }
});

var datatableRef;
const URL_LOCAL = "http://3.14.144.130";

function loadTable() {
    $.ajax({

        url: URL_LOCAL.concat("/GetUsers"),
        type: "GET",
        success: function (response) {
            if (datatableRef) {
                datatableRef.destroy();
            }
            datatableRef = $('#UsersTable').DataTable({
                data: response.users,
                columns: [
                    { title: "ID", data: "id" },
                    { title: "Name", data: "name" },
                    { title: "LastName", data: "lastName" },
                    { title: "Age", data: "age" },
                    { title: "Role", data: "role" },
                    { title: "UserName", data: "userName" },
                    {
                        title: "Actions", data: "userName", render: function (userName) {
                            return `
                      <div class="btn-group d-flex m-auto w-50">
                        <input type="button" value="Edit" class="btn btn-warning" onclick="editUserInterface('${userName}')">
                        <input type="button" value="Delete" class="btn btn-danger" onclick="deleteUser('${userName}'), localtion.reload()">
                      </div>
                    `
                        }
                    }
                ]
            })
        },
        error: function (response) {
            console.log(response);

        }
    })
}

function deleteUser(UserName) {
    var User = {
        "userName": UserName
    }

    $.ajax({
        url: URL_LOCAL.concat("/DeleteUser"),
        type: "POST",
        data: JSON.stringify(User),
        dataType: "JSON",
        success: function (response) {
            if (response.result == true) {
                swal("The user:" + User.userName + " has been removed");
            } else {
                swal("The user: " + User.userName + " could not be successfully removed");
            }
        },
        error: function (response) {
            console.log(response);

        }
    })
}

function CreateUserAdmin() {
    window.location.href = "09.CreateUserAdmin.html"
}

function LogOut() {
    localStorage.removeItem("Role")
    localStorage.removeItem("Security_validation")
    window.location.href = "09.loggin.html"
}

function editUserInterface(UserName) {
    var User = {
        "userName": UserName
    }

    $.ajax({
        url: URL_LOCAL.concat("/GetUser?userName=" + User.userName),
        type: "GET",
        data: JSON.stringify(User),
        dataType: "JSON",
        success: function (response) {
            if (response.result == true) {
                formEdit();
                $("#inputUserName").val(response.user.userName);
                $("#inputName").val(response.user.name);
                $("#inputLastName").val(response.user.lastName);
                $("#inputAge").val(response.user.age);
                $("#inputPassword").val(response.user.password);
                $("#inputRole").val(response.user.role);
            }

        },
        error: function (response) {
            console.log(response);
        }
    })
}

function cancelEdit() {
    location.reload();
}

function editUser() {
    var errorMsg = "";

    dataToSend = {
        "age": $("#inputAge").val(),
        "lastName": $("#inputLastName").val().trim(),
        "name": $("#inputName").val().trim(),
        "password": $("#inputPassword").val(),
        "userName": $("#inputUserName").val(),
        "role": $("#inputRole").val()
    }

    if (dataToSend.name == "") {
        errorMsg += "The name field cannot be empty. \n";
    }
    if (dataToSend.name =! "" && dataToSend.name.length < 3) {
        errorMsg += "The name field must contain more than 3 characters. \n"
    }

    if (dataToSend.lastName == "") {
        errorMsg += "The lastName field cannot be empty. \n";
    }
    if ( dataToSend.lastName =! "" && dataToSend.lastName.length < 3) {
        errorMsg += "The lastName field must contain more than 3 characters. \n"
    }

    if (dataToSend.age == "") {
        errorMsg += "You must enter an age. \n";
    }

    if (parseInt(dataToSend.age) < 1 && parseInt(dataToSend.age) > 150) {
        errorMsg += "You have entered an invalid age. \n";
    }

    if (dataToSend.userName == "") {
        errorMsg += "The userName field cannot be empty. \n";
    }

    if (dataToSend.userName.indexOf(' ') != -1) {
        errorMsg += "Username must not contain spaces. \n"
    }
    if (dataToSend.password.length < 5) {
        errorMsg += "The password is very weak. \n"
    }

    if (errorMsg != "") {
        swal(errorMsg);
    } else {
        deleteUser($("#inputUserName").val());
        $.ajax({
            url: URL_LOCAL.concat("/CreateUser"),
            type: "POST",
            data: JSON.stringify(dataToSend),
            dataType: "JSON",
            success: function (response) {
                if (response.result == true) {
                    swal("The user has been modified successfully");
                    location.reload();
                } else {
                    swal("Please validate that the data is correct");
                }
            },
            error: function (response) {
                swal("Try again");
            }
        });
    }
}

function formEdit() {
    $("#EditUser").append(` 
    <form>
        <div class="mt-5 border border-dark rounded container  w-70">
            <br>
            <div class="row mb-3">

                <div class="col-4">
                    <label class="w-100 font-weight-bold">User Name</label>
                    <input type="text" class="form-control" name="inputUserName" id="inputUserName"
                        placeholder="UserName"  disabled=false>
                </div>

                <div class="col-4">
                    <label class="w-100 font-weight-bold">Name</label>
                    <input type="text" class="form-control" name="inputName" id="inputName" placeholder="Name">
                </div>
                <div class="col-4">
                    <label class="w-100 font-weight-bold">Last Name</label>
                    <input type="text" class="form-control" name="inputLastName" id="inputLastName"
                        placeholder="Last Name">
                </div>

            </div>
            <div class="row mb-3">
                <div class="col-4">
                    <label class="w-100 font-weight-bold">Age</label>
                    <input type="number" class="form-control" name="inputAge" id="inputAge" placeholder="Age">
                </div>

                <div class="col-4">
                    <label class="w-100 font-weight-bold">Password</label>
                    <input type="text" class="form-control" name="inputPassword" id="inputPassword"
                        placeholder="Password">
                </div>

                <div class="col-4">
                    <label class="w-100 font-weight-bold">Role</label>
                    <select id="inputRole" class="form-control">
                        <option selected>Employee</option>
                        <option>Admin</option>
                    </select>
                </div>
            </div>
            <div class="row 2 form-group justify-content-center">
                <div class="col-1">
                    <input type="button" class="btn btn-warning" name="btnSave" onclick="editUser()"
                        id="btnSave" value="Edit">
                </div>
                <div class="col-1">
                    <input type="button" class="btn btn-danger" name="btnCancelar" onclick="cancelEdit()"
                        id="btnCancelar" value="Cancel">
                </div>
            </div>
        </div>
    </form>
    <br>`);
}