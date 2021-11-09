$(document).ready(function () {

    var security = localStorage.getItem("Security_validation");

    if (security == null) {
        window.location.href = "09.loggin.html"
    }

    var role = localStorage.getItem("Role");

    if (role = ! 'Admin') {
        window.location.href = "04.ClientStorageList.html"
    }
});

function cancel() {
    window.location.href = "09.listUsers.html";
}

function CreateUser() {

    var errorMsg = "";

    debugger;

    dataToSend = {
        "age": $("#inputAge").val(),
        "lastName": $("#inputLastName").val().trim(),
        "name": $("#inputName").val().trim(),
        "password": $("#inputPassword").val(),
        "ConfirmPassword": $("#inputConfirmPassword").val(),
        "userName": $("#inputUserName").val(),
        "role": $("#inputRole").val()
    }

    if (dataToSend.name == "") {
        errorMsg += "The user cannot be null. \n";
    }
    if (dataToSend.name.length < 3) {
        errorMsg += "the user must contain more than 3 characters. \n"
    }

    if (dataToSend.lastName == "") {
        errorMsg += "The user cannot be null. \n";
    }
    if (dataToSend.lastName.length < 3) {
        errorMsg += "the user must contain more than 3 characters. \n"
    }

    if (dataToSend.age == "") {
        errorMsg += "age can't be empty \n";
    }

    if (parseInt(dataToSend.age) < 1 && parseInt(dataToSend.age) > 150) {
        errorMsg += "I have entered an invalid age \n";
    }

    if (dataToSend.userName == "") {
        errorMsg += "The user cannot be null. \n";
    }

    if (dataToSend.userName.indexOf(' ') != -1) {
        errorMsg += "username must not contain spaces. \n"
    }
    if (dataToSend.password.length < 5) {
        errorMsg += "the password must contain between 5 and 20 characters \n"
    }
    if (dataToSend.password != dataToSend.ConfirmPassword) {
        errorMsg += "The password and confirm password fields must be the same \n"
    }

    if (errorMsg != "") {
        swal(errorMsg);
    } else {
        $.ajax({
            url: "http://3.14.144.130/CreateUser",
            type: "POST",
            data: JSON.stringify(dataToSend),
            dataType: "JSON",
            success: function (response) {
                if (response.result == true) {
                    swal("User created successfully").then(function () {
                        window.location.href = "09.listUsers.html";
                    });
                } else {
                    swal(response.message);
                }
            },
            error: function (response) {
                swal("Try again");
            }
        });
    }
}
