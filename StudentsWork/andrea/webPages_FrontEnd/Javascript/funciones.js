var numero = "";
var numero1 = "";
var funcion = "";
var resultado = 0;

function guardarNumero(pNumero) {
    numero += pNumero;
    console.log(numero)
    document.getElementById("txtPantalla").value += pNumero;
}

function guardarFuncion(pFuncion) {
    funcion = pFuncion;
    document.getElementById("txtPantalla").value += pFuncion;
    console.log(numero)
    numero1 = numero;
    console.log(numero1)
    numero = "";
    console.log(numero)
}

function resultado1() {
    resultado = 0;
    console.log(numero1)
    console.log(numero)
    if (funcion === '+') {
        resultado = parseInt(numero1) + parseInt(numero);
    }
    if (funcion === '-') {
        resultado = parseInt(numero1) - parseInt(numero);
    }
    if (funcion === '/') {
        if (numero == "0") {
            alert("no se peude dividir entre 0");
            borrar();
        } else {

            resultado = parseInt(numero1) / parseInt(numero);
        }
    }
    if (funcion === '*') {
        resultado = parseInt(numero1) * parseInt(numero);
    }
    console.log(resultado)
    document.getElementById("txtPantalla").value = resultado;
    numero = resultado;
}

function borrar() {
    document.getElementById("txtPantalla").value = "";
    numero = "";
    numero1 = "";

}