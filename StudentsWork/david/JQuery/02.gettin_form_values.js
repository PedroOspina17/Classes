function Mostrar() {
    console.log("Entor a la funcion")
    var user = $("#user").val();
    var userName = $("#userName").val();
    var userAge = $("#userAge").val();
    var dobDate = $("#dobDate").val();
    var ccardYear = $("#ccardYear").val();
    var ccardMonth = $("#ccardMonth").val();
    var doctype = $("#doctype").val();
    var educationLevel = $("#educationLevel").val();
    var gender = $("[Name=gender]:checked").val();
    var knowledgeList = $("[Name=knowledge]:checked");
    var experienceList = $("[Name=experience]:checked");
    var knowledge = "";
    var experience = "";
    console.log(knowledgeList)
    

    $.each(knowledgeList, function (index, value) {
        knowledge += $(value).val() + "\n"
    });

    $.each(experienceList, function (index, value) {
        experience += $(value).val() + "\n"
    });


    $("#result2").val("User : " + user + "\n" +
        "UserName : " + userName + "\n" +
        "userAge : " + userAge + "\n" +
        "dobdate:" + dobDate + "\n" +
        "ccardyear:" + ccardYear + "\n" +
        "ccardMonth:" + ccardMonth + "\n" +
        "doctype:" + doctype + "\n" +
        "educationLevel:" + educationLevel + "\n" +
        "gender:" + gender + "\n" +
        "knowledge:" + knowledge + "\n"+ 
        "experience:" + experience + "\n"
    
    
    );







}