$(document).ready(function(){
    for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
    }
    var usLog = localStorage.getItem("role");
    var userW = localStorage.getItem("Security");
    if(usLog == "Admin"){
        $("[name='admin']").show();
        $("#employee").hide();
    }
    else{
        $("#employee").show();
        $("[name='admin']").hide();
    }
    if (userW == null){
        window.location.href="09.login.html"
    }
    else if (localStorage.getItem("Security" ) != null){
        $("#user").append("<h1 class='font-weight-bolder text-center' style='font-size: -webkit-xxx-large;-webkit-text-stroke-width: medium;margin-left: 18rem'>Welcome " +userW+"</h1>");
       
    }
    
})



function logOut(){
    localStorage.getItem("Security")
    localStorage.removeItem("Security")
    window.location.href="09.Login.html"
}