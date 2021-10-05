$(document).ready(function(){
   
})

function updateUser(userName){
    debugger;
    var dataUser = {
        "userName": userName
    }
    $.ajax({
        url: "http://3.14.144.130/GetUser?userName="+dataUser.userName,
        type: "GET",
        data: JSON.stringify(dataUser),
        dataType: "JSON",
        success: function(response){
        debugger;
            if(response.result==true){
                localStorage.setItem("Security", userName)
                window.location.href="09.EditUser.html"  
            }
        },
        error: function(response){
            console.log(response);
           
        }  
    })
}
