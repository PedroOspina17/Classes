
function displayMessage(){


    // Inputs
    var user =  $("#user").val(); //Type text
    var userAge =  $("#userAge").val(); //Type number
    var userDOB =  $("#dobDate").val(); //Type date

    
    // Selects
    var doctypeValue = $("#doctype").val();  // To get only the value
    // var doctypeValue = $("#doctype option:checked").val(); // Same as before
    var doctypeText = $("#doctype option:checked").text(); // To get the value and the text
    
    // Radiobuttons
    var gender = $("input[name='gender']:checked").val(); //To get the value
    var genderDesc = $("input[name='gender']:checked").attr("description"); //To get the value
    
    // Checkboxes
    var knowledgeList = $('input[name="knowledge"]:checked');
    console.log(knowledgeList)
    var knowledge = "";
    $.each(knowledgeList, function(index, value) {

        console.log(value);
        knowledge += $(value).val() + "\n";

     });

    var resultMessage = `user: ${user} \nuserAge: ${userAge}  \ndoctype: ${ doctypeText} (${doctypeValue})\n`;
    resultMessage += `date of birdh: ${userDOB} \ngender: ${genderDesc} (${gender}) \nknowledge: ${knowledge}`
    $("#result2").val(resultMessage);

}