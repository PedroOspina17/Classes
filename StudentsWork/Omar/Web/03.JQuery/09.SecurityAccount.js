var countId = 1;
$(document).ready(function () {
   
});



function save(){
    var msg="";
    countId = countId +1;
    var age = $("#age").val();
    var id = $("#id").val();
    var lastName = $("#lastName").val();
    var name = $("#name").val();
    var password = $("#password").val();
    var role = $("#role").val();
    var userName = $("#userName").val();
    var users = {
        "age": age,
        "id": id,
        "lastName": lastName,
        "name": name,
        "password": password,
        "role": role,
        "userName": userName
    }
    console.log(id);
    $.ajax({
        url: "http://3.14.144.130/GetUsers",
        type: "POST",
        data: JSON.stringify(users),
        dataType: "JSON",
        success: function(response){
            debugger;
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