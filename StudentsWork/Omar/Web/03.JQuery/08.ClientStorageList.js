var countId = 1;
$(document).ready(function () {
    if (localStorage.getItem("Security" ) == null){
        window.location.href="../../Web/01.Html_CSS/02.Bootstrap_LoginFalena.html"
    }
    readStor();
});
 

var id = 0;
function create(){
    var msg = "";
    var key = $("#key").val();
    var value = $("#value").val();
    countId = countId +1;
    if(key == ""){
        msg+= "The field 'KEY' is required \n";
    }else if (key.length < 3 || key.length > 10){
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
    else{
        clearField();
        localStorage.setItem(key, value)
        $("#val").text(value)
        id +=1;
        $("#newData").append("<div class='form-inline mt-3 col-lg-12' style='height:60px' id='"+countId+"' value='"+key+"'><dl><dt id='keys"+countId+"'>"+key+":</dt><dd id='val"+countId+"'>"+value+"</dd></dl><div class='mt-lg-n3 ml-auto p-5'><input type='button' class='btn btn-outline-danger' id='"+countId+"' value='Delete' onclick='deleteData("+countId+")'></div></div>");
        toastr.info("The key added to LocalStorage");
    }
    
}

function clearField(){
    console.log("entró");
    $("#key").val("");
    $("#value").val("");
}

function deleteData(id){
    console.log("delete");
    var keys = $("#"+id).attr("value");
    $("#"+id+"").remove();
    console.log(keys);
    localStorage.removeItem(keys)
}

function clearLocStor(){
    localStorage.clear();
}

function readStor(){
   
    for (var id = 0; id < localStorage.length; id++){
        var key = localStorage.key(id);
        var value = localStorage.getItem(key);
        if(key != "Security"){
            $("#newData").append("<div class='form-inline mt-3 col-lg-12' style='height:60px' id='"+countId+"' value='"+key+"'><dl><dt id='keys"+countId+"'>"+key+":</dt><dd id='val"+countId+"'>"+value+"</dd></dl><div class='mt-lg-n3 ml-auto p-5'><input type='button' class='btn btn-outline-danger' id='"+countId+"' value='Delete' onclick='deleteData("+countId+")'></div></div>");
            countId = countId +1;
        }
    }
       
}

function logOut(){
    localStorage.getItem("Security")
    localStorage.removeItem("Security")
    window.location.href="../../Web/01.Html_CSS/02.Bootstrap_LoginFalena.html"
}

