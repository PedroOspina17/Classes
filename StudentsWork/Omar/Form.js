function sayHello() {
    alert("Form succesfull!");
}

function sayGoodBye() {
    alert("Good bye!!!");
}

function welcome(){
    alert("Welcome to my form JS")
}

function exitForm(){
    var question = confirm("You haven't saved the changes.\n¿Are you sure you want to leave?");
    if(question == true){
        sayGoodBye();

    }
    else{
        return false;
    }
}