function validar_usuario() {
    console.log("entro")
    var Almacenar_Correo = $("#email").val();
    var Almacenar_contraseña = $("#pss").val();

    $.ajax({
        url: "http://3.14.144.130/SingIn",
        type: "POST",
        data: {
            "userName": Almacenar_Correo,
            "password": Almacenar_contraseña
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });








    console.log(Almacenar_Correo)
    console.log(Almacenar_contraseña)
    if (Almacenar_Correo == "1" & Almacenar_contraseña == "1") {
        localStorage.setItem("User", Almacenar_Correo);
        swal("CORRECT", "WELCOME TO THE PAGE", "success").then(function () {
            window.location.href = "08.Web_Storage.html"
        });

    }
    else {
        swal("LOGIN", "THE USER AND/OR PASSWORD ARE INCORRECT.", "error")
    }


}





