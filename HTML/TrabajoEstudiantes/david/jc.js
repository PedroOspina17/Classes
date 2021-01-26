function hello(){
    alert("bienvenido a mi pagina")
}
function helloAG(){
    alert("bienvenido otra vez")
}
function bye(){
    var answer=confirm("estas seguro que quieres salir??")
    if (answer==true){
        alert("good bye")
    }
    else{
        helloAG();
    }
}
function suma (){
var N1 = document.getElementById ("num1").value;
var N2 = document.getElementById ("num2").value;
var suma1 = parseInt( N1 );
var suma2 = parseInt( N2 );
var resultado = (suma1 + suma2) 
document.getElementById("result").value=resultado;
}

function resta () {
var N1 = document.getElementById ("num1").value;
var N2 = document.getElementById ("num2").value;
var resta1 = parseInt( N1 );
var resta2 = parseInt( N2 );
var resultado = (resta1 - resta2) 
document.getElementById("result").value=resultado;
}

function div () {
    var N1 = document.getElementById ("num1").value;
    var N2 = document.getElementById ("num2").value;
    var suma1 = parseInt( N1 );
    var suma2 = parseInt( N2 );
    var resultado = (suma1 / suma2) 
    document.getElementById("result").value=resultado;
}

function mult () {
var N1 = document.getElementById ("num1").value;
var N2 = document.getElementById ("num2").value;
var suma1 = parseInt( N1 );
var suma2 = parseInt( N2 );
var resultado = (suma1 * suma2) 
document.getElementById("result").value=resultado;
}
