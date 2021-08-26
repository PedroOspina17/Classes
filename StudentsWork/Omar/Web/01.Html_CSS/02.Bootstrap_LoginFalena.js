function save(){
    var msg = "";
    var email = $("#inputEmail").val();
    var password = $("#inputPass").val();
    if(email == ""){
        msg += "The field 'E-mail' is required. \n"
    }
    if(password == ""){
        msg += "The field 'Password' is required."
    }
    else if (password.length < 3){
        msg += "The field 'Password' min 3 characters."
    }

    if(msg != ""){
        swal(msg);
    }

    if((email == "Admin" && password == "123") || (email == "Admin2" && password == "admin123")){
        window.location.href="../../Web/03.JQuery/08.clientStorageList.html"
    }
}