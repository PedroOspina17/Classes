var n;
var oper;

function number(n){
    console.log(n);
    document.getElementById('result').value += n;
    document.getElementById('result1').value += n;
}

function save_number(paramOper){
    console.log(paramOper);
    old_n = parseInt(document.getElementById('result').value);
    document.getElementById('result').value= "";
    document.getElementById('result1').value+= paramOper;
    oper = paramOper;
}

function reset (){
    document.getElementById('result').value = "";
    document.getElementById('result1').value = "";
}

function solution(){
    var result = 0;
    console.log("el input tiene:",document.getElementById('result').value);
    var new_n = parseInt(document.getElementById('result').value);
    console.log("oper es" + oper);
    console.log("oldn", old_n);
    console.log("newn", new_n);
    if (oper == '+'){
        result = old_n + new_n;
        console.log('entró +');
    }
    else if (oper == '-'){
        result = old_n - new_n;
        console.log('entró -');
    }
    else if (oper == '*'){
        result = old_n * new_n;
        console.log('entró *');
    }
    else if (oper == '/'){
        result = old_n / new_n;
        console.log('entró /');
    }
    else if (oper == '%'){
        result = old_n * new_n /100 ;
        console.log('entró %');
    }
    console.log("result",result);
    document.getElementById('result').value= result;
    console.log('Fin');
}


