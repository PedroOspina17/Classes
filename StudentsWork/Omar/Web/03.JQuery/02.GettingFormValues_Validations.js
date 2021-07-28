$(document).ready(function(){
    

});

function msgValidation(){
    var user = $("#user").val();
    var userName = $("#userName").val();
    var userAge = $("#userAge").val();
    var userDate = $("#userDate").val();
    var docTypeV = $("#docType").val();
    var docTypeT = $("#docType option:checked").text();
    var genderV = $("input[name='gender']:checked").val(); 
    var genderT = $("input[name='gender']:checked").attr("text"); 

    var knowList = $('input[name="know"]:checked');
    var know = "";
    $.each(knowList, function(index, value) {

        console.log(value);
        know += $(value).val() + "\n";

     });
     var expList = $('input[name="exp"]:checked');
     var exp = "";
     $.each(expList, function(index, value) {
 
         console.log(value);
         exp += $(value).val() + "\n";
 
      });

    msg="";
    if($("#user").val().length<5 || $("#user").val().length>15 || $("#user").val()<=0){
        msg+='-The user field is required and cannot be less than 5 or greater than 15 characters.\n';
    }
    if($("#userName").val().length<8 || $("#userName").val()<=0){
        msg+='-The userName field is required and cannot be less than 8 characters.\n';
    }
    if($("#userAge").val()<8){
        msg+="-The userAge is required and cannot be less than 8.\n";
    }
    if(new Date($("#userDate").val() + " 00:00:00") > new Date() || $("#userDate").val()==0){ 
        console.log("entró");
        msg += "-The userDate is required and cannot be greater than today's date.\n";
    }
    if($("#docType").val()==""){
        msg+='-The doc type field is required, selected a option.\n';
    }
    if($("#edLevel").val()==""){
        msg+='-The edeucation level field is required, selected a option.\n';
    }
    if(msg != ""){
        swal(msg);
    }

    var resultMsg = `user: ${user} \nuserName: ${userName}  \nuserAge: ${userAge}  \ndoctype: ${ docTypeT} (${docTypeV})\n`;
    resultMsg += `date of birdh: ${userDate} \ngender: ${genderT} (${genderV}) \nknowledge: ${know}\nexperience: ${exp}`
    $("#usInfo").val(resultMsg);
}


