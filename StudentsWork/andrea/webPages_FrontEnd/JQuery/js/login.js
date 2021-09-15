function validaciones() {
    debugger;
    var user = $("#txtUser").val();
    var Password = $("#txtPassword").val();

    $.ajax({
        url: "http://3.14.144.130/SingIn",
        type: "POST",
        data: JSON.stringify({ "userName": user, "password": Password }),
        dataType: "json",
        success: function(response) {
            debugger;
            if (response.result == true) {
                localStorage.setItem("user", response.user[0].userName);
                window.location.href = "08.ClientStorage.html"
            } else {
                swal("Error", "usuario o contraseña invalidas", "error")
            }
        },
        error: function(response) {
            debugger;
            swal("Error", response, "error")
        }

    });

}