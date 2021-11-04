
function ValidateLogIn() {

    dataToSend = {
        "userName": $("#inputUser").val(),
        "password": $("#inputPassUser").val()
    }

    $.ajax({
        url: "http://3.14.144.130/SingIn",
        type: "POST",
        data: JSON.stringify(dataToSend),
        dataType: "json",
        success: function (response) {
            if (response.result == true) {
                window.location.href = "04.ClientStorageList.html";
                localStorage.setItem("Security_validation",response.user[0].name);
            }
            else {
                swal("Incorrect user or password");
            }
        },
        error: function (response) {
            swal("Try again");
        }
    });
}
function RegisterUser(){
    window.location.href = "Sign_Up.html";
}

