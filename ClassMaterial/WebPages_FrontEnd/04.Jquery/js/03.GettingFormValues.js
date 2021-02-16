
function displayMessage(){
    var user =  $("#user").val();
    var user =  $("#userAge").val();
    
    var doctypeValue = $("#doctype").val();
    var doctype = $("#doctype option:checked");
    
    var gender = $("input[name='gender']:checked").val()
    var knowledgeList = $('input[name="locationthemes"]:checked');
    var knowledge = "";
    $.each(knowledgeList, function(index, value) {

        console.log(value);
        // knowledge += value 

     });


}