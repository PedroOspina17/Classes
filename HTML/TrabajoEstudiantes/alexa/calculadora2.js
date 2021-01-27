function calculate(operacion){
    if (operacion=="+"){
    var n1 = parseInt (document.getElementById("numero 1").value);
    var n2 = parseInt (document.getElementById("numero 2").value);
    var resultado = n1+n2;
    document.getElementById("resultado").value = `el resultado es ${resultado} `;
    }
    else if (operacion=="-") {
    var n1 = parseInt (document.getElementById("numero 1").value);
    var n2 = parseInt (document.getElementById("numero 2").value);
    var resultado = n1-n2;
    document.getElementById("resultado").value = `el resultado es ${resultado} `;
    }
    else if (operacion=="*") {
        var n1 = parseInt (document.getElementById("numero 1").value);
        var n2 = parseInt (document.getElementById("numero 2").value);
        var resultado = n1*n2;
        document.getElementById("resultado").value = `el resultado es ${resultado} `;          
    }
    else if (operacion=="/") {
        var n1 = parseInt (document.getElementById("numero 1").value);
        var n2 = parseInt (document.getElementById("numero 2").value);
        var resultado = n1/n2;
        document.getElementById("resultado").value = `el resultado es ${resultado} `;
    }
}
 function result(numero){ 
    var numero= parseintFloat(numero)
    document.getElementById("numero").value= numero;
}


