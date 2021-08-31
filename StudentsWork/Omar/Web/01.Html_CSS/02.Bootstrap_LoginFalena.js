function save(){
    var msg = "";
    var email = $("#inputEmail").val();
    var password = $("#inputPass").val();
    if(email == ""){
        msg += "The field 'Username' is required. \n"
    }
    else if (email != "Admin" && email != "Admin2"){
        msg += "Username incorrect! \n"
    }

    if(password == ""){
        msg += "The field 'Password' is required. \n"
    }
    else if (password.length < 3){
        msg += "The field 'Password' min 3 characters. \n"
    }
    else if (password != "123" || password != "admin123"){
        msg += "Password incorrect! \n"
    }
    if(email == "Admin" && password == "123"){
        window.location.href="../../Web/03.JQuery/08.clientStorageList.html"
        localStorage.setItem("Admin", "123")
    }
    else if(email == "Admin2" && password == "admin123"){
        window.location.href="../../Web/03.JQuery/08.clientStorageList.html"
        localStorage.setItem("Admin2", "admin123")
    }

    if(msg != ""){
        swal(msg);
    }
}