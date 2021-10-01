$(document).ready(function(){
    info();
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
                <td><a href='09.EditUser.html' type = 'button' id='update${value.userName}' class='btn btn_edit' style='background: mistyrose;border:double;width:75px' value='Edit' onclick='updateUser("${value.userName}")'>Edit</a>
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

