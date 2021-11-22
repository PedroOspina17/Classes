var table;// Se intacia variable global indefinido
// Función la cual busa la info de la API de todos los usuarios  y oculta el contenedor de los campos para modificar la info

function TableListUsers() {
    $('#ContenModify').hide();
    var ListUsers = '';
    $.ajax({
        url: `http://3.14.144.130/GetUsers`,
        type: "GET",
        success: function (response) {
            ListUsers = response.users
            if (table) {// De esta forma indica si esa variable tiene algo
                table.destroy(); // Destruye la creación de la DataTable y la recarga
            }
            table = $('#ListEmployee').DataTable({ //Cuando se cargue por primera vez la tabla se la asigna a la variable global
                data: ListUsers,
                columns: [
                    { title: "Age", data: "age" },
                    { title: "Identifier", data: "id" },
                    { title: "last Name", data: "lastName" },
                    { title: "Name", data: "name" },
                    { title: "Password", data: "password" },
                    { title: "Role", data: "role" },
                    { title: "User Name", data: "userName" },
                    {
                        title: "Actions", data: "userName", render: function (userName) {
                            return `
                          <div class="btn-group d-flex m-auto">
                            <button value="Modify" class="btn  btn-warning" id="ModifyLabel('${userName}')" onclick="ModifyLabel('${userName}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"/>
                                </svg>
                            </button>
                            <button value="Canel" class="btn  btn-danger" id="Delete('${userName}')" onclick="Delete('${userName}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                          </div>
                        `
                        }
                    }
                ]
            })
        },
        error: function (response) {
            swal("Ups.. Error");
        }
    })
}
// Funcion que carga la pagina cada vez que se recarga la tabla de los usuarios 
$(document).ready(function () {
    var keyLogin = localStorage.getItem('Logueado');
    if (keyLogin != null) {
        TableListUsers();        
    } else {
        window.location.href = "../../WebPages_FrontEnd/jQuery/01.logginStorage.html";
    }
});


// Función creada para mostrar el contenerdor de los campos que contiene la info 
// y le envia los datos que tiene en la API
function ModifyLabel(IntroUserName) {
    $.ajax({
        url: `http://3.14.144.130/GetUser?userName=${IntroUserName}`,
        type: "GET",
        success: function (response) {
            $('#ContenModify').show('slow');// Muestra el contenerdo del formulario donde se va ha cambiar la info
            $('#txtUserName').val(IntroUserName);
            $('#txtName').val(response.user.name);
            $('#txtLastName').val(response.user.lastName);
            $('#numAge').val(response.user.age);
            $('#pss').val(response.user.password);
            $('#SlcRole').val(response.user.role);
            $('#txtName').focus();
        },
        error: function (response) {
            swal("Ups.. Error");
        }
    })
}

function Delete(userName) {
    var jsonDelete = {
        "userName": userName
    }
    $.ajax({
        url: "http://3.14.144.130/DeleteUser",
        type: "POST",
        data: JSON.stringify(jsonDelete),
        dataType: "json",
        success: function (response) {
            TableListUsers();
            swal(`User ${userName}  Deleted`);
        },
        error: function (response) {
            swal("Ups.. Error");
        }
    })
}

// Función creada para cuado va a guardar la info que va modificar
// 1. Valida si los campos estana vacio, si lo estan genera alerta y no continua
// 2. Valida que el campo de edad no tenga (. ó ,)
// 3. Si la info está bien ingresada elimina el usuario que está en el API y crea uno nuevo...
// con la info ingresada y el mismo USERNAME que no cambia
function ModifyInfo() {
    var errorMsg = "";
    var userName = $("#txtUserName").val();
    var name = $("#txtName").val();
    var lastName = $("#txtLastName").val();
    var Age = $("#numAge").val();
    var pss = $("#pss").val();
    var role = $("#SlcRole").val();
    var jsonCreate = {
        "userName": userName,
        "name": name,
        "lastName": lastName,
        "age": Age,
        "password": pss,
        "role": role
    }

    if (name == '' || lastName == '' || isNaN(Age) || pss == '' || role == '0') {
        errorMsg += "Los campos no debe estar vacios, por favor validar\n";
    }
    if (Age.includes(".") || Age.includes(",")) {
        errorMsg += "El valor del campo Age debe de ser entero \n";
    }
    if (errorMsg != "") {
        swal(errorMsg);
    } else {
        Delete(userName);
        $.ajax({
            url: "http://3.14.144.130/CreateUser",
            type: "POST",
            data: JSON.stringify(jsonCreate),
            dataType: "json",
            success: function (response) {
                Cancel();// La función borra el contenido de los campos y oculta el contenerdor
                TableListUsers(); // Función la cual actualiza la infomación de la tabla
                swal("User creating correct");
            },
            error: function (response) {
                swal("Ups.. Error");
            }
        })
    }
}

function Cancel() {
    $('#txtUserName').val('');
    $('#txtName').val('');
    $('#txtLastName').val('');
    $('#numAge').val('');
    $('#pss').val('');
    $('#SlcRole').val('');
    $('#ContenModify').hide();
}