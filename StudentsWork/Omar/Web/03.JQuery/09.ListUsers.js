$(document).ready(function(){
    info();
})

function info(){
    $.ajax({
        url: "http://3.14.144.130/GetUsers",
        type: "GET",
        success: function(response){
            
            $.each(response.users, function(index, value){
                debugger;
                var tableRow= "<tr id='"+ value.id +"'>" +
                "<td> " + value.name + "</td>" +
                "<td>" + value.lastName + "</td>" +
                "<td> " + value.age + "</td>" +
                "<td> " + value.role + "</td>" +
                "<td> " + value.userName + "</td>" +
                "<td> " + "<input type = 'button' id='"+ value.id +"' class='btn btn-warning btn_edit' value='Edit' onclick='update("+value.id+")'>" +"<input type = 'button' id='"+value.id+"' class='btn btn-danger btn_remove' value='Delete' onclick='delete("+value.id+")'>" + "</td>" +
                "</tr>";
                $("#table").append(tableRow);
            })
        },
        error: function(response){
            console.log(response);
           
        }
    })
}