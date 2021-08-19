$(document).ready(function () {
  
});

function create(){
    var msg = "";
    var key = $("#key").val();
    var value = $("#value").val();
    if(key == ""){
        msg+= "The field 'KEY' is required \n";
    }else if (key.length < 3 || key.length>10){
        msg+= "The field 'key' min 3 characters and max 10 \n";
    }

    if (value == ""){
        msg+= "The field 'VALUE' is required \n";
    }
    else if (value.length > 250){
        msg+= "The field 'Value' max 250 characters \n";
    }

    if(msg != ""){
        swal(msg);
    }
}

function clearField(){
    console.log("entró");
    $("#key").val("");
    $("#value").val("");
}