$(document).ready(function(){
    info();
})

function info(){
    $.ajax({
        url: "http://3.14.144.130/GetUsers",
        type: "GET",
        success: function(response){
            
            $.each(response.users, function(index, value){
                
                var tableRow= "<tr class='text-secondary' id='"+ value.id +"'>" +
                "<td> " + value.id + "</td>" +
                "<td> " + value.name + "</td>" +
                "<td>" + value.lastName + "</td>" +
                "<td> " + value.age + "</td>" +
                "<td> " + value.role + "</td>" +
                "<td> " + value.userName + "</td>" +
                "<td> " + "<input type = 'button' id='update"+ value.id +"' class='btn btn_edit' style='background: mistyrose;border:outset' value='Edit' onclick='update("+value.id+")'>" +"<input type = 'button' id='remove"+value.id+"' class='btn btn_remove' style='background: mediumpurple;border:outset'  value='Delete' onclick='deleteUser("+value.id+")'>" + "</td>" +
                "</tr>";
                $("#table").append(tableRow);
            })
        },
        error: function(response){
            console.log(response);
           
        }
    })
}

function deleteUser(id){
    console.log("delete");
    $("#"+id+"").remove();
    data = {
            "userName": "Omarendon"
        }
    debugger
    $.ajax({
        url: "http://3.14.144.130/DeleteUser",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "JSON",
        success: function(response){
           data = 
            console.log(response);
            swal("User delete.")
        },
        error: function(response){
            console.log(response);
            swal("User not delete.")
        }
    })
}
