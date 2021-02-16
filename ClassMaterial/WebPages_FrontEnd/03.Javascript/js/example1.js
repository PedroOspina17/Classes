
function showFirstXOddNumbers(x) {
    console.log("show5OddNumbers was triggered");
    
    for (var index = 1; index <= x; index++) {
        console.log(index);
        if(index % 2 == 0){
            alert(index);    
        }
        
    }            
}
