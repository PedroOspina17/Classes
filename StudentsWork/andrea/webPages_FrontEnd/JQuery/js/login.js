function validaciones() {
    var user = $("#txtUser").val();
    var Password = $("#txtPassword").val();

    if (user == "admin" & Password == "admin123") {
        window.location.href = "08.ClientStorage.html"
        localStorage.setItem("user", "Admin" );
    } else if (user == "andrea" & Password == "andrea123") {
        window.location.href = "08.ClientStorage.html"
        localStorage.setItem("user", "Andrea" );
    }else {
        swal("Error","usuario o contraseña invalidas", "error")
    }

}