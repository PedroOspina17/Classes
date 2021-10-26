function ValidateLogIn() {

    dataToSend = {
        "userName": $("#inputUserName").val(),
        "password": $("#inputPassword").val()
    }

    $.ajax({
        url: "http://3.14.144.130/LogIn",
        type: "POST",
        data: JSON.stringify(dataToSend),
        dataType: "json",
        success: function (response) {
            if (response.result == true) {
                localStorage.setItem("Security_validation",response.user.name);
                localStorage.setItem("Role",response.user.role);
                window.location.href = "04.ClientStorageList.html";
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
