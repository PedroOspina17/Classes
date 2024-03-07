// crear una funcion que simule la actividad de una caja registradora.
// debe recibir como argumento el precio total de la compra
// debe recibir el efectivo que entrega el cliente para pagar la compra
// un array con la cantidad del efectivo disponible en caja con la denominación

// debe retornar un objeto donde la primera propiedad sea el status
//(sin cambios, cuando tengo dinero con que devolver pero no es sencillo)

//(sin fondos, cambio > al disponible en la caja)
// (ajustado, cuando el valor de lo que el cliente paga es igual al valor de la compra)
// (cerrado, cuando la devuelta sea igual a lo disponible en la caja)
// (abierto, cuando devuelvo y queda dinero disponible)

// del cajero y la segunda propiedad con la devuelta por denominación


function caja(valorPagado, valorFactura,Balance) {
  debugger;
  let devuelta = valorPagado - valorFactura;
let devueltaDenominacion = Retirar(devuelta, Balance);

//   let disponible = Balance - devuelta;
  let result = "";
  if (valorPagado == valorFactura) {
    result = "Ajustado";
  } else if (devuelta == Balance) {
    result = "cerrado";
  } else if (devuelta < disponible) {
    result = "abierto";
    Balance -= devuelta;
  } else if (devuelta > Balance) {
    result = "sin fondos";
  }
  console.log(result);
  console.log(Balance);
}



// let Balance = {
//     cant100 : 10,
//     50000: 50,
//     20000: 2,
//     10000: 0
// }



function Retirar(valor, Balance) {   
// debugger;
  let resultado = {
  };

//   let faltante = valor;
//   for (const denominacion in Balance) { // Falta recorrer el objecto de forma descendente.

//     console.log(denominacion);
    
//   resultado[denominacion] = Math.floor(faltante / denominacion); // Calculo la cantidad de billetes

//   if(Balance[denominacion] >= resultado[denominacion]){ // tengo la cantidad de billetes
//     Balance[denominacion] -= resultado[denominacion];
//   }else{
//       resultado[denominacion] = Balance[denominacion];      
//       Balance[denominacion] = 0;
//   }
//   faltante = faltante - (resultado[denominacion] * denominacion); // Calculo el valor faltante
//   }



  resultado.cant100 = Math.floor(valor / 100000); // Calculo la cantidad de billetes

  if(Balance.cant100 >= resultado.cant100){ // tengo la cantidad de billetes
    Balance.cant100 -= resultado.cant100;
  }else{
      resultado.cant100 = Balance.cant100;      
      Balance.cant100 = 0;
  }
  let faltante = valor - (resultado.cant100 * 100000); // Calculo el valor faltante


  resultado.cant50 = Math.floor(faltante / 50000);
  if(Balance.cant50 >= resultado.cant50){ 
    Balance.cant50 -= resultado.cant50;
  }else{
      resultado.cant50 = Balance.cant50;      
      Balance.cant50 = 0;
  }
  faltante = faltante - resultado.cant50 * 50000;

  resultado.cant20 = Math.floor(faltante / 20000);
  if(Balance.cant20 >= resultado.cant20){ 
    Balance.cant20 -= resultado.cant20;
  }else{
      resultado.cant20 = Balance.cant20;      
      Balance.cant20 = 0;
  }

  faltante = faltante - resultado.cant20 * 20000;

  resultado.cant10 = Math.floor(faltante / 10000);
  if(Balance.cant10 >= resultado.cant10){ 
    Balance.cant10 -= resultado.cant10;
  }else{
      resultado.cant10 = Balance.cant10;      
      Balance.cant10 = 0;
  }
  faltante = faltante - resultado.cant10 * 10000;
if(faltante > 0){
    console.log("Señor usuario, no tengo efectivo para procesar la transacción");
}else{
    console.log("Efectivo:",resultado);
}
  return resultado;
}
