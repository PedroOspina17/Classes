$(document).ready(function(){
    clear();
})

function save(){
    var msg = "";
    var email = $("#inputEmail").val();
    var password = $("#inputPass").val();
   
    if(email == ""){
        msg += "The field 'Username' is required. \n"
    }

    if(password == ""){
        msg += "The field 'Password' is required. \n"
    }
    else if (password.length < 3){
        msg += "The field 'Password' min 3 characters. \n"
    }
   
    if(msg != ""){
        swal(msg);
    }
    else{
        var jsonUser = {
            "userName": email,
            "password": password
        }
    
        $.ajax({
            url: "http://3.14.144.130/SingIn",
            type: "POST",
            data: JSON.stringify(jsonUser),
            dataType: "JSON",
            success: function(response){
                debugger;
                console.log(response);
                if(response.result==true){
                    localStorage.setItem("Security", email)
                    window.location.href="../../Web/03.JQuery/08.clientStorageList.html"  
                }else{
                    swal("User or Password incorrect.")
                }
            },
            error: function(response){
                console.log(response);
               
            }
        })
    }
}
    
    
function clear(){
    $("#inputEmail").val("");
    $("#inputPass").val("");
}