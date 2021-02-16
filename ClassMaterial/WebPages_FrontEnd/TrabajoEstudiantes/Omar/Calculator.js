/*function sum(){
    var num1 = parseInt(document.getElementById('numb1').value);
    var num2 = parseInt(document.getElementById('numb2').value);
    document.getElementById('result').value= num1+num2;
}

function subs(){
    var num1 = parseInt(document.getElementById('numb1').value);
    var num2 = parseInt(document.getElementById('numb2').value);
    document.getElementById('result').value= num1-num2;
}

function mult(){
    var num1 = parseInt(document.getElementById('numb1').value);
    var num2 = parseInt(document.getElementById('numb2').value);
    document.getElementById('result').value= num1*num2;
}

function div(){
    var num1 = parseInt(document.getElementById('numb1').value);
    var num2 = parseInt(document.getElementById('numb2').value);
    document.getElementById('result').value= num1/num2;
} */

function result(oper){
    var num1 = parseInt(document.getElementById('numb1').value);
    var num2 = parseInt(document.getElementById('numb2').value);

    if (oper=='+'){
        document.getElementById('result').value= num1+num2; 
    }
    else if (oper=='-'){
        document.getElementById('result').value= num1-num2;
    }
    else if (oper=='*'){
        document.getElementById('result').value= num1*num2;
    }
    else if (oper=='/'){
        document.getElementById('result').value= num1/num2;
    }
}