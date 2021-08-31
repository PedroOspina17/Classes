
$(document).ready(GetInfo);

function SendGETRequest(){
    debugger;
    console.log("1. Entró al método");
    var userId = $("#txtId").val();
    $.ajax({
        url: "https://reqres.in/api/users/"+userId,
        type: "GET",
        success: function(response){
            debugger;
            console.log("2. Se ejecutó correctamente");
            console.log("The request response was successfully");
            console.log(response);
            if(response.data != null){
                toastr.info("The api is working and send this info: " + response.data.first_name);
            }                        
        },
        error: function(response){
            console.log("The request response was not successfully");
            console.log(response);
        }
    })
    console.log("3. terminó");
    
}


function SendPOSTRequest(){
    var formData = {
        "Id": $("#txtId").val(),
        "Name": $("#txtName").val()
    }

    $.ajax({
        url: "https://reqres.in/api/users/",
        type: "POST",
        data: JSON.stringify(formData),
        success: function(response){            
            console.log(response);
            toastr.info("The request response was successfully")
        },
        error: function(response){
            console.log("The request response was not successfully");
            console.log(response);
        }
    })
}

function GetInfo(){
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "get",
        success: function(response){
            console.log(response);
            
            $.each(response.data, function(key,value){
                var trHtml = `<tr id="tr_${value.id}">
                <td>${value.id}</td>
                <td>${value.email}</td>
                <td>${value.first_name}</td>                
                <td><input type="button" value="remove" class="btn btn-danger" id="btnRemove_${value.id}" onclick="remove(${value.id})"></td>
            </tr>`;
                $("#mytable").append(trHtml);
            });
            
        }
    })
}

function remove(id){
    toastr.info(id);
}