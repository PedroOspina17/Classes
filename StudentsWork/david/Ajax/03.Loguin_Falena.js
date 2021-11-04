function validar_usuario() {
    debugger;
    console.log("entro")
    var Almacenar_Correo = $("#email").val();
    var Almacenar_contrasena = $("#pss").val();


    var dataToSend = {
        "userName": Almacenar_Correo,
        "password": Almacenar_contrasena
    };
    $.ajax({ 
        url: "http://3.14.144.130/LogIn",
        type: "POST",
        data: JSON.stringify(dataToSend),
        dataType: "json",
        success: function (response) {
            debugger;
            if (response.result == true) {
                localStorage.setItem("User", Almacenar_Correo);
                swal("CORRECT", "WELCOME TO THE PAGE", "success").then(function () {
                    window.location.href = "08.Web_Storage.html"
                });
            }
            else {
                swal("LOGIN", "THE USER AND/OR PASSWORD ARE INCORRECT.", "error")
            }
        },
        error: function (response) {
            swal("ERROR", "An error has ocurred, Try again", "error")
        }
    });

}

function SaveInfo() {
    if ($("#Age").val() == "" || $("#LastName").val() == "" ||$("#Name").val() == "" ||$("#password").val() == "" ||$("#UserName").val() == "") {
        swal("SORRY", "All the fields are required", "warning")
    }
    else{
        if ($("#password").val() == $("#Confirmation").val()) {
            var ITS = {
                "age": $("#Age").val(),
                "lastName": $("#LastName").val(),
                "name": $("#Name").val(),
                "password": $("#password").val(),
                "userName": $("#UserName").val()
            }
            $.ajax({
                url: "http://3.14.144.130/CreateUser",
                type: "POST",
                data: JSON.stringify(ITS),
                dataType: "json",
                success: function(response){
                    console.log(response);
                },
                error: function (response){
                    console.log(response);
                }

            })


            console.log(ITS)
            $("#Age").val("")
            $("#LastName").val("")
            $("#Name").val("")
            $("#password").val("")
            $("#UserName").val("")
            $("#Confirmation").val("")
            swal("PERFECT", "Your account was created successfully", "success")
            
        }
        else {
            swal("SORRY", "Your password confirmation is not the same", "error")
        }
    }

}





