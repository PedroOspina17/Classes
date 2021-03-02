function validar_usuario(){
    console.log("entro")
    var Almacenar_Correo = $("#email").val();
    var Almacenar_contraseña = $("#pss").val();
    console.log(Almacenar_Correo)
    console.log(Almacenar_contraseña)
    if (Almacenar_Correo=="Admin" & Almacenar_contraseña=="Admin123!"){
        swal("CORRECT","WELCOME TO THE PAGE","success").then(function(){
            window.location.href="welcome.html"
        });
        
    }
    else{
        swal("LOGIN","THE USER AND/OR PASSWORD ARE INCORRECT.","error")    }
        

}
