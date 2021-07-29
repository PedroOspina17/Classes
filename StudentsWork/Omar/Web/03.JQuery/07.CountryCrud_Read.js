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

function msgValid(){
    if ($("#id").val() == ""){
        $("#idNumber").removeClass('text-hide');
    }
    else if($("#id").val() <= 0){
        $("#idNumber2").removeClass('text-hide');
    }
    else{
        $("#idNumber").addClass('text-hide');
        $("#idNumber2").addClass('text-hide');
    }

    if ($("#countryName").val() == ""){
        $("#Name").removeClass('text-hide');
    }
    else if($("#countryName").val().length > 15){
        $("#Name2").removeClass('text-hide');
    }
    else{
        $("#Name").addClass('text-hide');
        $("#Name2").addClass('text-hide');
    }

    if ($("#longName").val().length > 50){
        $("#long").removeClass('text-hide');
    }
    else{
        $("#long").addClass('text-hide');
    }
   
    if ($("#countryDesc").val().length < 10){
        $("#countDesc").removeClass('text-hide');
    }
    else if($("#countryDesc").val().length > 250){
        $("#countDesc2").removeClass('text-hide');
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
}

function create(){
    var form=$("#form").val();
    msgValid();
    $.each(form, function(index, value){
        $("#table").append("<tr>" +
        "<td> " + value.countryName + "</td >" +
        "<td>" + value.countryDesc + "</td>" +
        "<td> " + value.status + "</td>" +
        "</tr>"
        )
    })
}