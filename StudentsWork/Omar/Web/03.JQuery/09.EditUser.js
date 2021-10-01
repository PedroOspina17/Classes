$(document).ready(function(){
 
})

function updateUser(userName){
    debugger;
    var userEdit = {
        "userName": userName
    }
    $.ajax({
        url: "http://3.14.144.130/GetUser"/userEdit,
        type: "GET",
        success: function(response){
            $.each(response.user, function(index,value){
                $("#age").val(user.age);
                $("#id").val(user.id);
                $("#lastName").val(user.lastName);
                $("#name").val(user.name);
                $("#password").val(user.password);
                $("#role").val(user.role);
                $("#userName").val(user.userName);
            })
            console.log(response);
            swal("User edited.")
           
        },
        error: function(response){
            console.log(response);
            swal("User not edited.")
        }  
    })
   
}