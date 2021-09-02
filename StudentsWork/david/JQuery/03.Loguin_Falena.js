function validar_usuario() {
    console.log("entro")
    var Almacenar_Correo = $("#email").val();
    var Almacenar_contraseña = $("#pss").val();


    var dataToSend = {
        "userName": Almacenar_Correo,
        "password": Almacenar_contraseña
    };
    $.ajax({
        url: "http://3.14.144.130/SingIn",
        type: "POST",
        data: JSON.stringify(dataToSend),
        dataType: "json",
        success: function (response) {
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





