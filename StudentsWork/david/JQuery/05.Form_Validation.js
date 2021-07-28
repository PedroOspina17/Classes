function Mostrar() {
    console.log("Entor a la funcion")
    var Alert = ""
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

    if ($("#User").val().trim()==""){
        Alert += "01. The user cannot be null \n";
    };
    if ( user.length < 4 || user.length > 16){
        Alert += "01.2. The user field should be greather than 5 and less than 15 characters\n";
    };
    if (userName.trim()==""){
        Alert += "03. User name field cannot be empty  \n";
    };
    if (userAge.trim()==""){
        Alert += "03. User name field cannot be empty  \n";
    };
    if(userAge < 8){
        Alert += "03.2. Users Age field cannot be less than 8 years old \n";
    };
  
    if(Alert != ""){
        swal("Warning", Alert, "warning")
    };

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

