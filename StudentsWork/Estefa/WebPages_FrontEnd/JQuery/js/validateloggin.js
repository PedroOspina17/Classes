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