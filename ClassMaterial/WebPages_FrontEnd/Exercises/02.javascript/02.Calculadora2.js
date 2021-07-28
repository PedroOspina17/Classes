var savedNumber = "";
var currentNumber = "";
var resultado = 0 ;
var savedOperation = "";
var isAns = false;
function saveNumber(number) {
    // document.getElementById("history").value += numero;
    document.getElementById("history").innerHTML += number;
    currentNumber += ""+number;
    console.log(number);
}

function saveOperation(currentOperation) {
   

    if (currentOperation === 'AC') {
        savedNumber = 0;
        savedOperation = "";        
        document.getElementById("history").innerHTML = "";
        document.getElementById("result").value = 0;
        currentNumber = 0;
        isAns = false;
    } 
    // else if(currentOperation === 'B'){
    //     currentNumber = 0;
    //     document.getElementById("numbers").value = 0;
    // }
    else{
        savedNumber = currentNumber;
        currentNumber = 0;
        savedOperation = currentOperation;
        
        // document.getElementById("numbers").value = "";
        if(isAns)
        {
            document.getElementById("history").innerHTML = "Ans" + currentOperation;

        }else{
            document.getElementById("history").innerHTML += currentOperation;

        }
    }
    
    
}
function calculateResult() {
    console.log("savedNumber",savedNumber);
    console.log("currentNumber",currentNumber);
    console.log("savedOperation",savedOperation);

    var n1 = parseInt(savedNumber);
    var n2 = parseInt(currentNumber);

    if (savedOperation == '+') {
        resultado = (n1 + n2);                
    }
    else if (savedOperation == '-') {
        resultado = (n1 - n2);        
    }
    else if (savedOperation == 'x') {
        resultado = (n2 * n1);        
    }
    else if (savedOperation == '/') {
        if(n2 === 0)
        {
            document.getElementById("history").innerHTML = "";
            document.getElementById("result").value = "Math error";
            return;
        }
        resultado = (n1 / n2);        
    }
    currentNumber = resultado;    
    isAns = true;
    document.getElementById("result").value = resultado;
    console.log("resultado",resultado);
    console.log("Fin");
}



















