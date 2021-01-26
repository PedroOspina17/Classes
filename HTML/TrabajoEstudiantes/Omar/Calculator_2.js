var n;
function number(n){
    console.log(n);
    document.getElementById('result').value+= n;   
}


function save_number(oper){
    old_n = parseInt(document.getElementById('result').value);
    document.getElementById('result').value= oper;
    console.log(old_n);
}

var oper;
function solution(){
    var new_n = parseInt(document.getElementById('result').value);
    if (oper == '+'){
        document.getElementById('result').value= old_n + new_n; 
    }
    else if (oper == '-'){
        document.getElementById('result').value= old_n - new_n;
    }
    else if (oper == 'x'){
        document.getElementById('result').value= old_n * new_n;
    }
    else if (oper == '÷'){
        document.getElementById('result').value= old_n / new_n;
    }
    
}


