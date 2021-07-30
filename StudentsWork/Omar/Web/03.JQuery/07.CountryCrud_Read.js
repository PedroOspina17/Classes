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


function addRow(){
    $.each(info, function(index, value){
        $("#table").append("<tr>" +
        "<td> " + value.Name + "</td >" +
        "<td>" + value.Description + "</td>" +
        "<td> " + value.Status + "</td>" +
        "</tr>"
        )
        console.log(value);
    })
}

function msgValid(infoValidate){
    if (infoValidate.Id == ""){
        $("#idNumber").removeClass('text-hide');
    }
    else if(infoValidate.Id <= 0){
        $("#idNumber2").removeClass('text-hide');
    }
    else{
        $("#idNumber").addClass('text-hide');
        $("#idNumber2").addClass('text-hide');
    }

    if (infoValidate.Name == ""){
        $("#Name").removeClass('text-hide');
    }
    else if(infoValidate.Name.length > 15){
        $("#Name2").removeClass('text-hide');
    }
    else{
        $("#Name").addClass('text-hide');
        $("#Name2").addClass('text-hide');
    }

    if (infoValidate.LongName.length > 50){
        $("#long").removeClass('text-hide');
    }
    else{
        $("#long").addClass('text-hide');
    }
   
    if (infoValidate.Description.length < 10 && $("#countryDesc").val().length > 0){
        $("#countDesc").removeClass('text-hide');
    }
    else if(infoValidate.Description.length > 250){
        console.log($("#countryDesc").val().length)
        $("#countDesc2").removeClass('text-hide');
        console.log("entró");
    }
    else{
        $("#countDesc").addClass('text-hide');
        $("#countDesc2").addClass('text-hide');
    }
    
}

function clearForm() {
    $("#id").val("");
    $("#countryName").val("");
    $("#longName").val("");
    $("#countryDesc").val("");
    $("#population").val("");
    $("#status").val("");
    $("#idNumber").addClass('text-hide');
    $("#idNumber2").addClass('text-hide');
    $("#Name").addClass('text-hide');
    $("#Name2").addClass('text-hide');
    $("#long").addClass('text-hide');
    $("#countDesc").addClass('text-hide');
    $("#countDesc2").addClass('text-hide');
    $("#true").prop('checked', true);
}

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

    msgValid(formInfo);
    $("#table").append("<tr>" +
    "<td> " + formInfo.Name + "</td >" +
    "<td>" + formInfo.Description + "</td>" +
    "<td> " + formInfo.Status + "</td>" +
    "</tr>")   
    info.push(formInfo);
    console.log(info);
}

