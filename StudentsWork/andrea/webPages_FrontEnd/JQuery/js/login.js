function validaciones() {
    var user = $("#txtUser").val();
    var Password = $("#txtPassword").val();

    if (user == "Admin" & Password == "Admin123!") {
        window.location.href = "Admin.html"
    } else {
        swal("usuario o contraseña invalidas")
    }

}