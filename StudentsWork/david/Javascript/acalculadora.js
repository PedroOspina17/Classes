    var Rnumero;
var numeroR
function mostrar(numero) {
    Rnumero = document.getElementById("numbers").value += numero;
    console.log(Rnumero);
}
var simbolo;
function operaciones(simbolos) {
    numeroR = Rnumero;
    console.log(numeroR)
    simbolo = simbolos
    console.log(simbolo)
    document.getElementById("numbers").value = "";

}
function igual() {
    var n1 = parseInt(Rnumero);
    var n2 = parseInt(numeroR);
    if (simbolo == '+') {
        var resultado = (n1 + n2);
        document.getElementById("numbers").value = "";
        document.getElementById("numbers").value = resultado;
        Rnumero = resultado
    }
    else if (simbolo == '-') {
        var resultado = (n2 - n1);
        document.getElementById("numbers").value = "";
        document.getElementById("numbers").value = resultado;
        Rnumero = resultado
    }
    else if (simbolo == 'x') {
        var resultado = (n2 * n1);
        document.getElementById("numbers").value = "";
        document.getElementById("numbers").value = resultado;
        Rnumero = resultado
    }
    else if (simbolo == '/') {
        var resultado = (n2 / n1);
        document.getElementById("numbers").value = "";
        document.getElementById("numbers").value = resultado;
        Rnumero = resultado
    }
}



















