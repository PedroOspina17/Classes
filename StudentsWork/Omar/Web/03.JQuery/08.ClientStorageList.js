$(document).ready(function () {
  getLocalStor();
});

var id = 0;
var key = $("#key").val();
var value = $("#value").val();
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
    }else{
        clearField();
        localStorage.setItem(key, value);
        $("#keys").text(key);
        $("#val").text(value);
        id +=1;
        $("#newData").append("<div class='form-inline mt-3 col-lg-12' id='data"+id+"'><dl><dt id='keys"+id+"'>"+key+":</dt><dd id='val"+id+"'>"+value+"</dd></dl><div class='mt-lg-n3 ml-auto p-5'><input type='button' class='btn btn-outline-danger' id='"+id+"' value='Delete' onclick='deleteData("+id+")'></div></div>");
    }
    
}

function clearField(){
    console.log("entró");
    $("#key").val("");
    $("#value").val("");
}

function deleteData(id){
    console.log("delete");
    $("#data"+id+"").remove();
}

function clearLocStor(){
    localStorage.clear();
}

function getLocalStor(){
    var storeVal = localStorage.getItem(key)
    $("#value").val(storeVal)
}