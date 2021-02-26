function almacenarDatosLogin () {

var user =  $("#inputEmail").val();
var password =  $("#inputPassword").val();
ingresarCuenta (user,password)
}


function ingresarCuenta (user, password) {
    
    if (user == "Admin" & password == "Admin123!") {
        windojhugyg
    }
    else {
        swal("Datos erroneos, verifique su usuario y contraseña");
    }
}

function validarUsuario () {

    var user =  $("#inputEmail").val();
    var password =  $("#inputPassword").val();
    if (user == "Admin" & password == "Admin123!") {
        window.location.href = "WelcomUserAdmin.html"
    }
    else {
        swal("Datos erroneos, verifique su usuario y contraseña");
    }
}