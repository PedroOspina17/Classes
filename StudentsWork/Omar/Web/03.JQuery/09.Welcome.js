$(document).ready(function(){
    var userW = localStorage.getItem("Security" );
    if (localStorage.getItem("Security" ) != null){
        $("#user").append("<h1 class='font-weight-bolder text-center' style='font-size: -webkit-xxx-large;-webkit-text-stroke-width: medium;margin-left: 18rem'>Welcome " +userW+"</h1>");
    }
    userLog()
})

function userLog(){
    var userW = localStorage.getItem("Security" );
    if(userW == "PedroOspina17"){
        $("[name='admin']").show();
        $("#listUsers").hide();
    }
    else{
        $("#listUsers").show();
        $("[name='admin']").hide();
    }
}

function logOut(){
    localStorage.getItem("Security")
    localStorage.removeItem("Security")
    window.location.href="09.Login.html"
}