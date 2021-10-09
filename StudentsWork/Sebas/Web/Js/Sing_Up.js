function cancel() {
    window.location.href = "loggin_NP.html";
}

function CreateUser() {

    var errorMsg = "";

    dataToSend = {
        "age": $("#userAge").val(),
        "lastName": $("#inputlastName").val().trim(),
        "name": $("#inputName").val().trim(),
        "password": $("#inputPassword").val(),
        "userName": $("#inputUserName").val()
    }

    $.ajax({
        url: "http://3.14.144.130/GetUser?userName=" + dataToSend.userName,
        type: "GET",
        data: JSON.stringify(dataToSend),
        dataType: "json",

        success: function (response) {
     
            if (response.result == true) {
                errorMsg += "The userName: " + dataToSend.userName + " you are already registered \n";
            }
        },
        error: function (response) {
            swal("Try again");
        }
    });

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

    if (dataToSend.age == "" ) {
        errorMsg += "Ah ingresado una edad no valida \n";
    }

    if (parseInt(dataToSend.age) < 1 && parseInt(dataToSend.age) > 150) {
        errorMsg += "Ah ingresado una edad no valida \n";
    }

    if (dataToSend.userName == "") {
        errorMsg += "The user cannot be null. \n";
    }

    if (dataToSend.userName.indexOf(' ') != -1) {
        errorMsg += "username must not contain spaces. \n"
    }
    if (dataToSend.password.length < 5) {
        errorMsg += "La contrasena debe ser mas larga \n"
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
                debugger
                if (response.result == true) {
                    swal("Usuario creado");
                }else{
                    swal("Pailas");
                }
            },
            error: function (response) {
                swal("Try again");
            }
        });
    }
}
