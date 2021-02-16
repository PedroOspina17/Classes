    function suma(){
        var n1 = parseInt (document.getElementById("numero 1").value);
        var n2 = parseInt (document.getElementById("numero 2").value);
        var resultado = n1+n2;
        document.getElementById("resultado").value = `el resultado es ${resultado} `;
    }
    function resta(){
        var n1 = parseInt (document.getElementById("numero 1").value);
        var n2 = parseInt (document.getElementById("numero 2").value);
        var resultado = n1-n2;
        document.getElementById("resultado").value = `el resultado es ${resultado} `;
    }
    function multiplicacion(){
        var n1 = parseInt (document.getElementById("numero 1").value);
        var n2 = parseInt (document.getElementById("numero 2").value);
        var resultado = n1*n2;
        document.getElementById("resultado").value = `el resultado es ${resultado} `;
    }
    function division(){
        var n1 = parseInt (document.getElementById("numero 1").value);
        var n2 = parseInt (document.getElementById("numero 2").value);
        var resultado = n1/n2;
        document.getElementById("resultado").value = `el resultado es ${resultado} `;
    }
    function borrar(){
        var n1 = document.getElementById("resultado").value = `el resultado es ${resultado} `;
        var n2 = document.getElementById("resultado").value = `el resultado es ${resultado} `;
        var resultado = document.getElementById("resultado").value = `el resultado es ${resultado} `;
        
    }
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

