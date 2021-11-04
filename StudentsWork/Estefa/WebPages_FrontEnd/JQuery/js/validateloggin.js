function PageLoad() {
    for (var i = 0; i < localStorage.length; i++) {
        var keyLogin = localStorage.key(i);
        var valueLogin = localStorage.getItem(keyLogin);
        if (valueLogin != 'Admin') {
            $('#ImagAdmin').hide();
        }
    }
}


function ValidateData() {
    var user = $("#txtUser").val();
    var pss = $("#pssUser").val();
    if (user == 'Admin' && pss == '123') {
        window.location.href = "../JQuery/08.ClientStorageList.html";
        localStorage.setItem(user, pss);
    } else {
        swal("Credenciales incorrectas");
    }
}
function LoginUsuario() {
    var user = $("#txtUser").val();
    var pss = $("#pssUser").val();
    var json = {
        "userName": user,
        "password": pss
    }

    $.ajax({
        url: "http://3.14.144.130/LogIn",
        type: "POST",
        data: JSON.stringify(json),
        dataType: "json",
        success: function (response) {
            if (response.result != false) {
                console.log(response);
                response.result == true;
                if (response.user.role == 'Employee') {
                    window.location.href = "../JQuery/08.ClientStorageList.html";
                    localStorage.setItem("Logueado", user);
                    localStorage.setItem("Role", response.user.role);
                } else if (response.user.role == 'Admin')
                    window.location.href = "../JQuery/8.1.MenuAdmin.html";
                localStorage.setItem("Logueado", user);
                localStorage.setItem("Role", response.user.role);
            } else {
                swal("Ha ocurrido un ERROR, consultar mas tarde");
            }
        },
        error: function (response) {
            swal("Ha ocurrido un ERROR, consultar mas tarde");
        }
    })
}

function CreateUser() {
    var errorMsg = "";
    var name = $("#txtName").val();
    var lastName = $("#txtLastName").val();
    var Age = $("#numberAge").val();
    var user = $("#txtUserName").val();
    var pss = $("#pssUserSignUp").val();
    var jsonCreate = {
        "name": name,
        "lastName": lastName,
        "age": Age,
        "userName": user,
        "password": pss
    }

    $.ajax({
        url: `http://3.14.144.130/GetUser?userName=${user}`,
        type: "GET",
        success: function (response) {
            debugger
            if (response.result == false) {
                // validar cada uno de los campos
                if (name == '' || lastName == '' || isNaN(Age) || user == '' || pss == '') {
                    errorMsg += "Los campos no debe estar vacios, por favor validar\n";
                }
                if (Age.includes(".") || Age.includes(",")) {
                    errorMsg += "El valor del campo Age debe de ser entero \n";
                }
            } else if (response.result == true) {
                //El usuario ingresado ya existe
                errorMsg += response.message;
                swal(errorMsg);
            }
            if (errorMsg != "" || response.result == true) {
                swal(errorMsg);
            } else {
                $.ajax({
                    url: "http://3.14.144.130/CreateUser",
                    type: "POST",
                    data: JSON.stringify(jsonCreate),
                    dataType: "json",
                    success: function (response) {
                        if (response.result != false) {
                            console.log(response);
                            response.result == true;
                            swal("User creating correct");
                            $("#txtName").val('');
                            $("#txtLastName").val('');
                            $("#numberAge").val('');
                            $("#txtUserName").val('');
                            $("#pssUserSignUp").val('');
                        } else {
                            swal("Ups... Error");
                        }
                    },
                    error: function (response) {
                        swal("Ups.. Error");
                    }
                })
            }
        },
        error: function (response) {
            swal("Ups.. Error");
        }
    })
}


function listUsers() {//Provisional preguntar por un usuario 
    var user = $("#txtUserName").val();
    $.ajax({
        url: `http://3.14.144.130/GetUser?userName=${user}`,
        type: "GET",
        success: function (response) {
            response.result == true;
            swal(response.message);
        },
        error: function (response) {
            swal("Ups.. Error");
        }
    })
}

function UsuarioNuevo() {
    swal.fire(
    )
}
function ShowHideForm(valueBtn) {
    //$("#FormLogin").toggle('slow');
    //$("#FormSignUp").toggle('slow');
    if (valueBtn != 'Login') {
        $("#FormLogin").hide('slow');
        $("#FormSignUp").toggle('slow');
    } else if (valueBtn != 'Registration') {
        $("#FormSignUp").hide('slow');
        $("#FormLogin").toggle('slow');
    }
}
function ShowFormSignUp() {
    $("#FormSignUp").show('slow');
}
function CloseForm(IdForm) {
    $(`#${IdForm}`).hide();
}
