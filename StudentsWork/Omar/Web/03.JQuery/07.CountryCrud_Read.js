$(document).ready(function () {
    toastr.info("The page was loaded")
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
        console.log(info);
    })
}

function msgValid(infoValidate){
    var validation = true;
    
    $.each(info, function(index, value){
        if (value.Id == infoValidate.Id ){
            $("#idNumber3").removeClass('text-hide');
            validation = false;
            return false;
        }else if (value.Id != infoValidate.Id){
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
    console.log(info);
}

var modify = false;
function create(){
    var formInfo = 
        {
            "Id":parseInt($("#id").val()),
            "Name": $("#countryName").val(),
            "LongName": $("#longName").val(),
            "Description": $("#countryDesc").val(),
            "PopulationAprox": parseInt($("#population").val()),
            "Status": $("input[name = 'status']:checked").val()
        }
    var id= formInfo.Id;
    console.log(id);
    var formData = `<tr id='row${id}'>
    <td>${formInfo.Name}</td>
    <td>${formInfo.Description}</td>
    <td>${formInfo.Status}</td>
    <td> <input type = 'button' id='${id}' class='btn btn-warning btn_edit' value='Edit' onclick='updateCountry(${id})'><input type = 'button' id='${id}' class='btn btn-danger btn_remove' value='Delete' onclick='deleteRow(${id})'></td>
    </tr>`;
    //debugger;
    var validations = msgValid(formInfo);
    if (modify == true){
        console.log("entró1");
        deleteRow(id);
        $("#table").append(formData);
    }
    if (validations == true){
        if (modify == false){
           
            console.log("entró2");
            $("#table").append(formData);
        }
    }
    toastr.success("The country was saved!");
    info.push(formInfo);
    clearForm(); 
    console.log(info);
}

function deleteRow(id){
    var row = findIdx(id);
    if(row > -1){
        $("#row"+id+"").remove();
        info.splice(row,1);
    }
    toastr.success("The country was eliminated!"); 
    console.log(info);
}

function findIdx(id){
    var updateRow= -1;
   $.each (info, function(index, value){
        if (value.Id == id){
            updateRow = index;
            return true;
        }
   });
   return updateRow;
}


function updateCountry(id){
    toastr.info("Updating"+id)
    var idx = findIdx(id);
    var infoNew = info[idx];
    console.log(infoNew); 
    if (idx > -1){
        $("#id").val(infoNew.Id).prop('disabled', true);
        $("#countryName").val(infoNew.Name);
        $("#longName").val(infoNew.LongName);
        $("#countryDesc").val(infoNew.Description);
        $("#population").val(infoNew.PopulationAprox);
        if (infoNew.Status == "Active"){
            $("#true").prop('checked', true);
        }
        else{
            $("#false").prop('checked', true);
        }  
    }
   console.log(info); 
   modify=true;
}