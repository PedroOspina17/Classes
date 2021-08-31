function ValidateLogIn() {
    var user = $("#inputUser").val();
    var pss = $("#inputPassUser").val();

    if (user == 'Admin' && pss == 'Admin123!') {
        window.location.href = "theOtherPage.html";
    } else {
        swal("El usuario y / o la contraseña son incorrectos");
    }
}