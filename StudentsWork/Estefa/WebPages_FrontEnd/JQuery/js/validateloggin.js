function ValidateData(){
    var user = $("#txtUser").val();
    var pss  = $("#pssUser").val();

   if (user == 'Admin' && pss == '123'){
        window.location.href = "PaginaNueva.html";
   }else{
       swal("Credenciales incorrectas");
   }
}