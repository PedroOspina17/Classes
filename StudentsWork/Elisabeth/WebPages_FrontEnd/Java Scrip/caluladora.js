function suma() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 + num2;
}

function resta() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 - num2;
}

function multiplicacion() {
    var num1 = parseInt(document.getElementById("num1").value);
      
    var num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 * num2;
}

function division() {
    var a = 1;
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 / num2;
}

var acum="";
var acum2="";

function almacenarNumero (num) {
    acum+=num;
    document.getElementById("resultado").value = acum;
}

function sumar (){
    acum+="+"
    document.getElementById("resultado").value = acum
}


function concatenar(op) {
    
    if (op == "+") {
        acum+="+"
        document.getElementById("resultado").value = acum;
    }
    else if (op == "-") {
        acum+="-"
        document.getElementById("resultado").value = acum;
    }
    else if (op == "*") {
        acum+="*"
        document.getElementById("resultado").value = acum;
    }
    else if (op == "/") {
        acum+="/"
        document.getElementById("resultado").value = acum;
    }
}

function limpiarCampo() {
    acum=""
    document.getElementById("resultado").value="";
}

function calcular(op) {
    if (op == "+") {
        sumar(num1,num2)
    }
    
}