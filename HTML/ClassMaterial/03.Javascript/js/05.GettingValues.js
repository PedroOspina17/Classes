function sayHello(){
    var user = document.getElementById("user").value;
    var userName = document.getElementById("userName").value;
    document.getElementById("saludo").value = `Hello  ${userName}  (${user}) `;
}