function ValidateData(){
    var user = $("#txtUser").val();
    var pss  = $("#pssUser").val();

   if (user == 'Admin' && pss == '123'){
        window.location.href = "../JQuery/08.ClientStorageList.html";
        localStorage.setItem(user,pss);
   }else{
       swal("Credenciales incorrectas");
   }
}

function validarUsuario(){
    var user = $("#txtUser").val();
    var pss  = $("#pssUser").val();
    var json = {
        "userName": user,
        "password": pss
    }

    $.ajax({
        url: "http://3.14.144.130/SingIn",
        type: "POST",
        data: JSON.stringify(json),
        dataType: "json",
        success: function(response){
            console.log(response);
            response.result == true;
            window.location.href = "../JQuery/08.ClientStorageList.html";
            localStorage.setItem("Logueado",user);
        },
        error: function (response){
            swal("Ha ocurrido un ERROR, consultar mas tarde");
        }
    })
}
