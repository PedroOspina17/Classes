var countId = 1;
$(document).ready(function () {
   
});



function save(){
    var msg="";
    
    var age = $("#age").val();
    var lastName = $("#lastName").val();
    var name = $("#name").val();
    var password = $("#password").val();
    var userName = $("#userName").val();
    var users = {
        
        "age": age,
        "lastName": lastName,
        "name": name,
        "password": password,
        "userName": userName
    }
    var id = users.id
    console.log(id);
    $.ajax({
        url: "http://3.14.144.130/CreateUser",
        type: "POST",
        data: JSON.stringify(users),
        dataType: "JSON",
        success: function(response){
            //debugger;
            console.log(response);
            swal("User Save Succesfull.")
        },
        error: function(response){
            console.log(response);
            swal("User not save.")
            
        }
        
    })
    console.log(users);
}