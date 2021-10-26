$(document).ready(function(){
    info();
    $('#exampleModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
})

function info(){
    $.ajax({
        url: "http://3.14.144.130/GetUsers",
        type: "GET",
        success: function(response){
            
            $.each(response.users, function(index, value){
                
                var tableRow= `<tr class='text-secondary' id='${value.userName}'>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.lastName}</td>
                <td>${value.age}</td>
                <td>${value.role}</td>
                <td>${value.userName}</td>
                <td><button type = 'button' id='update${value.userName}' class='btn btn_edit' style='background: mistyrose;border:double;width:75px' data-toggle="modal" data-target="#exampleModalCenter" value='Edit' onclick='updateUser("${value.userName}")'>Edit</button>
                    <input type = 'button' id='remove${value.userName}' class='btn btn_remove' style='background: mediumpurple;border:double' value='Delete' onclick='deleteUser("${value.userName}")'></td>
                </tr>`;
                $("#table").append(tableRow);
            })
        },
        error: function(response){
            console.log(response);
           
        }  
    })
}

function deleteUser(userName){
    debugger;
    console.log("delete");
    $("#"+userName+"").remove();
    var dataUser = {
        "userName": userName
    }
    $.ajax({
        url: "http://3.14.144.130/DeleteUser",
        type: "POST",
        data: JSON.stringify(dataUser),
        dataType: "JSON",
        success: function(response){ 
            console.log(response);
            swal("User delete.")
        },
        error: function(response){
            console.log(response);
            swal("User not delete.")
        }
    })
}


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
            
            $("#userName").val(response.user.userName);
            $("#id").val(response.user.id);
            $("#age").val(response.user.age);
            $("#name").val(response.user.name);
            $("#lastName").val(response.user.lastName);
            $("#password").val(response.user.password);
            $("#role").val(response.user.role);
        
            // window.location.href="09.EditUser.html"  
        }
        },
        error: function(response){
            console.log(response);
           
        }  
    })
}
//localStorage.setItem("Security", userName)