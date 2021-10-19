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

function loadTable() {

    $.ajax({

        url: "http://3.14.144.130/GetUsers",
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
                        <input type="button" value="Edit" class="btn btn-warning" onclick="EditUser('${userName}')">
                        <input type="button" value="Delete" class="btn btn-danger" onclick="deleteUser('${userName}')">
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

    debugger;
    $.ajax({
        url: "http://3.14.144.130/DeleteUser",
        type: "POST",
        data: JSON.stringify(User),
        dataType: "JSON",
        success: function (response) {
            if (response.result == true) {
                debugger;
                swal("The user:" + User.userName + " has been removed");
                location.reload();
            } else {
                debugger;
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

function EditUser() {
    
}