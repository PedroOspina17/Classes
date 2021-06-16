var acumulador=" ";
var result1="";
nu=0
function result(numero){ 
    acumulador+= numero;
    document.getElementById("numero").value= acumulador;
   var result1 = acumulador
}
function suma(sum){
    document.getElementById("numero").value=sum
    var suma= `${result1} ${sum}`;
    document.getElementById("numero").value=""
}



