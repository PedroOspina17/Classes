function hello(){
    alert("bienvenido a mi pagina")
}
function helloAG(){
    alert("bienvenido otra vez")
}
function bye(){
    var answer=confirm("estas seguro que quieres salir??")
    if (answer==true){
        alert("good bye")
    }
    else{
        helloAG();
    }
}