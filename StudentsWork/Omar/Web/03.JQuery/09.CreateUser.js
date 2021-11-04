$(document).ready(function(){
    var userW = localStorage.getItem("Security" );
    if (userW == null){
        window.location.href="09.login.html"
    }
})

function create(){
    var msg="";
    if (age == 0){
        msg += "The field 'Age' is required \n"
    }
    if (lastName == "" || name == "" || userName == ""){
        msg += "The field 'LastName' is required \n"
    }
    if (name == ""){
        msg += "The field 'Name' is required \n"
    }
    if (userName == ""){
        msg += "The field 'UserName' is required \n"
    }
    if (role == ""){
        msg += "The field 'Role' is required \n"
    }
    if (password.length<4 || password == ""){
        msg += "The field 'Password' cannot be less than 4 characters \n"
    }
    if(msg != ""){
        swal(msg);
    }
    var age = $("#age").val();
    var lastName = $("#lastName").val();
    var name = $("#name").val();
    var password = $("#password").val();
    var role = $("#role").val();
    var userName = $("#userName").val();
    
    var users = {
        
        "age": age,
        "lastName": lastName,
        "name": name,
        "password": password,
        "role": role,
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
            if(response.result==true){
                swal("User create Succesfull.");
                window.location.href="09.Login.html"
            }else{
                swal("The user already exist!")
            } 
            
        },
        error: function(response){
            console.log(response);
            
        }
        
    })
    console.log(users);
    cancel()
}

function cancel(){
    $("#age").val("");
    $("#lastName").val("");
    $("#name").val("");
    $("#password").val("");
    $("#userName").val("");
}

function back(){
    window.location.href="09.Welcome.html"
}
//https://getbootstrap.com/docs/4.0/components/modal/