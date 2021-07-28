function displayMessage(){
    var user = $("#user").val();
    var name = $("#userName").val();
    var age = $("#userAge").val();
    
    var dateBirth = $("[name='dobDate']").val();
    var expirationYear =  $("#ccardYear").val();    
    var expirationMonth =  $("#ccardMonth").val();

    var doctypevalue  = $("#doctype").val();
    var doctypetext  = $("#doctype option:checked").text();

    var educationLevelvalue  = $("#educationLevel").val();
    var deducationLeveltext  = $("#educationLevel option:checked").text();
    
    var genderDesc = $("input[name='gender']:checked").attr("description"); 
    var knowledgeList = $("input[name='knowledge']:checked");
    //console.log(knowledgeList);
    var knowledge = "";
    $.each(knowledgeList, function(index, value){

        //console.log(value);
        knowledge += $(value).val() + "\n";
    }); 

    var result = `user: ${user} \nname: ${name} \nage: ${age} \ndateBirth: ${dateBirth}`
    result += `\nexpirationYear: ${expirationYear} \nexpirationMonth: ${expirationMonth} \ndoctype: ${doctypetext} (${doctypevalue})\n Education level: ${deducationLeveltext} (${educationLevelvalue})\n genderDesc: ${genderDesc}`;
    $("#result2").val(result);
}