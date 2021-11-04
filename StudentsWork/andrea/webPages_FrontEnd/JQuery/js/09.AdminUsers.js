$(document).ready(load);

var editar = false;
var usuarioEliminar;

function load() {
    //debugger;
    if (editar == true) {
        $("#users").DataTable().destroy()
    }
    $.ajax({
        url: "http://3.14.144.130/GetUsers",
        type: "GET",
        success: function(response) {
            //debugger;
            if (response.users.length >= 0) {
                $("#users").DataTable({
                    data: response.users,
                    columns: [
                        { title: "NOMBRE", data: "name" },
                        { title: "APELLIDO", data: "lastName" },
                        { title: "EDAD", data: "age" },
                        { title: "ROL", data: "role" },
                        {
                            title: "",
                            data: "userName",
                            render: function(userName) {
                                return `
                            <div class="btn-group d-flex m-auto w-50">
                            <input type="button" value="Editar" class="btn btn-outline-warning" onclick="Editar('${userName}')">
                            <input type="button" value="Eliminar" class="btn btn-outline-danger" onclick="Eliminar('${userName}')">
                            </div>                            
                            `
                            }
                        }

                    ]

                })
            }

        },
        error: function(response) {
            swal("error", "se presento un error intente nuevamente", "error")
        }

    });
}

function guardar() {
    //debugger;
    var mensaje = "";
    var cuenta = {
        "age": parseInt($("#txtEdad").val()),
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

    if (isNaN(cuenta.age)) {
        mensaje += "ingrese edad \n"
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
        if (editar == true) {
            Eliminar(usuarioEliminar);
        }
        $.ajax({
            url: "http://3.14.144.130/CreateUser",
            type: "POST",
            data: JSON.stringify(cuenta),
            dataType: "json",
            success: function(response) {
                if (response.result == true) {
                    toastr.success(response.message)
                    load();
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

function Editar(userName) {
    editar = true;
    usuarioEliminar = userName;
    $.ajax({
        url: "http://3.14.144.130/GetUser?userName=" + userName,
        type: "get",
        success: function(response) {
            debugger;
            if (response.result == true) {
                $("#txtEdad").val(response.user.age),
                    $("#txtApellido").val(response.user.lastName),
                    $("#txtNombre").val(response.user.name),
                    $("#txtContraseña").val(response.user.password),
                    $("#txtUsuario").val(response.user.userName),
                    $("#txtConfirmacion").val(response.user.password);

            } else {
                swal(response.message)
            }
        },
        error: function(response) {
            debugger;
            swal("Error", response, "error")
        }
    });
}

function Eliminar(userName) {
    debugger;
    $.ajax({
        url: "http://3.14.144.130/DeleteUser",
        type: "POST",
        data: JSON.stringify({ "userName": userName }),
        dataType: "json",
        success: function(response) {
            debugger;
            if (response.result == true) {
                toastr.success(response.message)
                limpiarCampos()
                load();
            } else {
                swal(response.message)
            }
        },
        error: function(response) {
            debugger;
            swal("Error", response, "error")
        }

    });
}

function limpiarCampos() {
    $("#txtEdad").val(new Date),
        $("#txtApellido").val(""),
        $("#txtNombre").val(""),
        $("#txtContraseña").val(""),
        $("#txtUsuario").val("")
}



function cancelar(params) {
    window.location.href = "login.html"
}