$(document).ready(function(){
    clear();
})

function save(){
    console.log("Entra");
    var msg = "";
    var email = $("#inputUser").val().trim();
    var password = $("#inputPass").val().trim();
   
    if(email == ""){
        msg += "The field 'Username' is required. \n"
    }
    if(email.indexOf(" ") > -1){
        msg += "The email should be single word. \n"
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
            url: "http://3.14.144.130/LogIn",
            type: "POST",
            data: JSON.stringify(jsonUser),
            dataType: "JSON",
            success: function(response){
                //debugger;
                console.log(response);
                if(response.result==true){
                    localStorage.setItem("Security", email)
                    window.location.href="09.Welcome.html"  
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
    $("#inputUser").val("");
    $("#inputPass").val("");
}