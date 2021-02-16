function sayHelloJS(){
    var user = document.getElementById("user").value;
    var userName = document.getElementById("userName").value;
    var greetings = `Hello  ${userName}  (${user}) `;
    document.getElementById("saludo").value = greetings;
}

function sayHelloJQuery(){
    var user = $("#user").val();
    var userName = $("#userName").val();
    var greetings = `Hello  ${userName}  (${user}) `;
    $("#saludo").val(greetings);
}


function hidePanelJS(){
    var pnl = document.getElementById("pnlForm");
    pnl.style = "display: none";
}

function hidePanelJQuery(){
    $("#pnlForm").hide("slow");    
}