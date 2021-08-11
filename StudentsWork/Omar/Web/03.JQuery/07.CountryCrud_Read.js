$(document).ready(function () {
    addRow();
});
var info =  [
    {
        "Id": 1,
        "Name": "Colombia",
        "LongName":"Republica de Colombia",
        "Description": "Piedra del peñol",
        "PopulationAprox": 50374000,
        "Status": true
    },
    {
        "Id": 2,
        "Name": "France",
        "LongName":"Republique Francaise",
        "Description": "Eifel Tower",
        "PopulationAprox": 68011000,
        "Status": false
    },
    {
        "Id": 3,
        "Name": "USA",
        "LongName":"United States of America",
        "Description": "Statue of Liberty",
        "PopulationAprox": 328461000,
        "Status": true
    },
    {
        "Id": 4,
        "Name": "England",
        "LongName":"kingdom united",
        "Description": "The Gherkin",
        "PopulationAprox": 55980000,
        "Status": false
    },
    {
        "Id": 5,
        "Name": "Germany",
        "LongName":"Federal Republic of Germany",
        "Description": "Mainzer Dom",
        "PopulationAprox": 83149300,
        "Status": true
    }
]


var table = $("#table").val();
function addRow(){
    $.each(info, function(index, value){
        
        id = value.Id;
        $("#table").append("<tr id='row"+ id +"'>" +
        "<td> " + value.Name + "</td >" +
        "<td>" + value.Description + "</td>" +
        "<td> " + value.Status + "</td>" +
        "<td> " + "<input type = 'button' id='"+ id +"' class='btn btn-warning btn_edit' value='Edit' onclick='updateCountry("+id+")'>" +"<input type = 'button' id='"+ id+"' class='btn btn-danger btn_remove' value='Delete' onclick='deleteRow("+id+")'>" + "</td>" +
        "</tr>"
        )
        console.log(value);
    })
}

function msgValid(infoValidate){
    var validation = true;
    
    $.each(info, function(index, value){
        if (value.Id == infoValidate.Id){
            $("#idNumber3").removeClass('text-hide');
            validation = false;
            return false;
        } else{
            $("#idNumber3").addClass('text-hide');
        }
    })
    if (isNaN(infoValidate.Id) ){
        $("#idNumber").removeClass('text-hide');
        validation = false;
    }
    else if(infoValidate.Id <= 0){
        $("#idNumber2").removeClass('text-hide');
        validation = false;
    }
    else{
        $("#idNumber").addClass('text-hide');
        $("#idNumber2").addClass('text-hide');
        
    }

    if (infoValidate.Name == ""){
        $("#Name").removeClass('text-hide');
        validation = false;
    }
    else if(infoValidate.Name.length > 15){
        $("#Name2").removeClass('text-hide');
        validation = false;
    }
    else{
        $("#Name").addClass('text-hide');
        $("#Name2").addClass('text-hide');
    }

    if (infoValidate.LongName.length > 50){
        $("#long").removeClass('text-hide');
        validation = false;
    }
    else{
        $("#long").addClass('text-hide');
    }
   
    if (infoValidate.Description.length < 10 && $("#countryDesc").val().length > 0){
        $("#countDesc").removeClass('text-hide');
        validation = false;
    }
    else if(infoValidate.Description.length > 250){
        console.log($("#countryDesc").val().length)
        $("#countDesc2").removeClass('text-hide');
        validation = false;
        console.log("entró");
    }
    else{
        $("#countDesc").addClass('text-hide');
        $("#countDesc2").addClass('text-hide');
    }

    return validation;
    
}

function clearForm() {
    $("#id").val("").prop('disabled', false);
    $("#countryName").val("");
    $("#longName").val("");
    $("#countryDesc").val("");
    $("#population").val("");
    $("#status").val("");
    $("#idNumber").addClass('text-hide');
    $("#idNumber2").addClass('text-hide');
    $("#idNumber3").addClass('text-hide');
    $("#Name").addClass('text-hide');
    $("#Name2").addClass('text-hide');
    $("#long").addClass('text-hide');
    $("#countDesc").addClass('text-hide');
    $("#countDesc2").addClass('text-hide');
    $("#true").prop('checked', true);
}

var modify= false;
function create(){
    var formInfo = 
        {
            "Id":parseInt($("#id").val()),
            "Name": $("#countryName").val(),
            "LongName": $("#longName").val(),
            "Description": $("#countryDesc").val(),
            "PopulationAprox": parseInt($("#population").val()),
            "Status": $("input[name = 'status']:checked").val()
        };

    var validations = msgValid(formInfo);

    id = formInfo.Id;
    console.log(info);
    
    if (validations == true){
        
        if (modify == true){
            console.log("entró1");
            
            $("#table").append("<tr id='row"+ id +"'>" +
            "<td> " + formInfo.Name + "</td >" +
            "<td>" + formInfo.Description + "</td>" +
            "<td> " + formInfo.Status + "</td>" +
            "<td> " + "<input type = 'button' id='"+ id +"' class='btn btn-warning btn_edit' value='Edit' onclick='updateCountry("+id+")'>" +"<input type = 'button' id='"+ id+"' class='btn btn-danger btn_remove' value='Delete' onclick='deleteRow("+id+")'>" + "</td>" +
            "</tr>")
            $("#row"+id+"").remove();
            toastr.success("The country was edited!");
            clearForm();
            info.push(formInfo);
        }
        else{
            console.log("entró2");
            $("#table").append("<tr id='row"+ id +"'>" +
            "<td> " + formInfo.Name + "</td >" +
            "<td>" + formInfo.Description + "</td>" +
            "<td> " + formInfo.Status + "</td>" +
            "<td> " + "<input type = 'button' id='"+ id +"' class='btn btn-warning btn_edit' value='Edit' onclick='updateCountry("+id+")'>" +"<input type = 'button' id='"+ id+"' class='btn btn-danger btn_remove' value='Delete' onclick='deleteRow("+id+")'>" + "</td>" +
            "</tr>")
            toastr.success("The country was created!");
            clearForm();
            info.push(formInfo);
        }
    }
    console.log(info);
    
}

/*$(document).on('click', '.btn_remove', function () {
    var button_id = $(this).attr("id");
    $("#row"+button_id+"").remove();

    var deleteRow = -1;
    $.each(info, function(index, value){
        if (value.Id == button_id){
            deleteRow = index;
        }
    })
    info.splice(deleteRow,1);
    toastr.success("The country was eliminated!");
    console.log(info);
})*/

function deleteRow(id){
    var deleterow = -1;
    $.each(info, function(index, value){
        if (value.Id == id){
            deleterow = index;
        }
    })
    $("#row"+id+"").remove();
    info.splice(deleterow,1);
    toastr.success("The country was eliminated!");
    
}


function updateCountry(id){
    var updateRow= -1;
    modify= true;
   $.each (info, function(index, value){
        if (value.Id == id){
            updateRow = index;
            
            $("#id").val(value.Id).prop('disabled', true);
            $("#countryName").val(value.Name);
            $("#longName").val(value.LongName);
            $("#countryDesc").val(value.Description);
            $("#population").val(value.PopulationAprox);
            $("input[name = 'status']:checked").val(info.Status);
            
        }
   })
   /*deleteRow(id);*/
   info.splice(updateRow,1);
   console.log(info); 

}