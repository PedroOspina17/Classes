function validaciones() {
    debugger;
    var user = $("#txtUser").val();
    var password = $("#txtPassword").val();
    var mensaje = "";

    if (user == "") {
        mensaje += "ingrese user"
    }

    if (password == "") {
        mensaje += "ingrese contraseña"
    }

    if (mensaje != "") {
        swal("validaciones", mensaje, "warning")
    } else {

        $.ajax({
            url: "http://3.14.144.130/LogIn",
            type: "POST",
            data: JSON.stringify({ "userName": user, "password": password }),
            dataType: "json",
            success: function(response) {
                debugger;
                if (response.result == true) {
                    localStorage.setItem("user", response.user.userName);
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

}