function sayHello() {
    console.log("sayHello was triggered");
    alert("Welcome to my form !!");
}

function sayGoodBye() {
    console.log("sayGoodBye was triggered");
    alert("Good bye!!");
}

function calculateSum(n1, n2) {
    console.log("calculateSum was triggered");
    console.log(n1, n2);
    alert("The sum is: " + (n1 + n2));
}

function verifyAge(age) {
    console.log("verifyAge was triggered");
    console.log(age);
    if(age > 18)
    {
        alert("Is older than 18 years old");
    }
    else{
        alert("Is younger than 18 years old");
    }
}

function show5Numbers() {
    console.log("show5Numbers was triggered");
    for (var index = 1; index <= 5; index++) {
        console.log(index);
        alert(index);    
    }            
}

function AskSomething(){
    var data = prompt("What is your name?");
    console.log(data);
}




function leave(){
    console.log("This function was executed.");
    var answer = confirm("You haven't saved the changes.\n¿Are you sure you want to leave?");
    console.log(answer);
    if(answer == true){
        sayGoodBye();

    }
    else{
        return false;
    }
}
