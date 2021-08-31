function msgValidation(){

var user = $("#user").val();
var name = $("#name").val();
var age = $("#age").val();
var documentTypeV = $("#docType").val();
var documentTypeT = $("#docType option:checked").text();
var educationalLevel = $("#edLevel").val();
var dateOfBirthYear = $("#year").val();
var dateOfBirthMonth = $("#month").val();
var dateOfBirthDay = $("#day").val();
var genderV = $("input[name='gender']:checked").val();
var genderT = $("input[name='gender']:checked").attr("text");

var knowList = $('input[name="know"]:checked');
var know = "";
$.each(knowList, function (index, value) {

    console.log(value);
    know += $(value).val() + "\n";

});
var expList = $('input[name="exp"]:checked');
var exp = "";
$.each(expList, function (index, value) {

    console.log(value);
    exp += $(value).val() + "\n";

});

};