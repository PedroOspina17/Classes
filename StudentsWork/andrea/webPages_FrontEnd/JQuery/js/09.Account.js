function guardar() {
    //debugger;
    var mensaje = "";
    var cuenta = {
        "age": $("#txtEdad").val(),
        "lastName": $("#txtApellido").val(),
        "name": $("#txtNombre").val(),
        "password": $("#txtContraseña").val(),
        "userName": $("#txtUsuario").val()
    }

    var confirmacion = $("#txtConfirmacion").val();

    if (cuenta.name == "") {
        mensaje += "ingrese nombre \n"
    }

    if (cuenta.lastName == "") {
        mensaje += "ingrese apellido \n"
    }

    if (cuenta.age == "") {
        mensaje += "ingrese fecha de nacimiento \n"
    } else {
        cuenta.age = (new Date()).getFullYear() - new Date(cuenta.age).getFullYear()
    }

    if (cuenta.userName == "") {
        mensaje += "ingrese usuario \n"
    }

    if (cuenta.password == "") {
        mensaje += "ingrese contraseña \n"
    }

    if (confirmacion == "") {
        mensaje += "confirme contraseña \n"
    }

    if (cuenta.password != confirmacion) {
        mensaje += "la contraseña y la confirmacion no son iguales \n"
    }

    if (mensaje != "") {
        swal("Validaciones", mensaje, "error");

    } else {
        $.ajax({
            url: "http://3.14.144.130/CreateUser",
            type: "POST",
            data: JSON.stringify(cuenta),
            dataType: "json",
            success: function(response) {
                if (response.result == true) {
                    toastr.success(response.message)
                    window.location.href = "login.html"
                } else {
                    swal("warning", response.message, "warning")
                }

            },
            error: function(response) {
                swal("error", "ocurrio un error intente nuevamente", "error");
            }

        });

    }

}

function cancelar(params) {
    window.location.href = "login.html"
}