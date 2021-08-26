$(document).ready(function(){
    getLocalStorage();
    getSessionStorage();

});

function createLocalStorage(){

    var valueToStore = $("#lsValue").val()
    localStorage.setItem("MyKey",valueToStore)
    $("#lStoredValue").text(valueToStore)
    toastr.info("MyKey added to localStorage")
}

function createSessionStorage(){
    var valueToStore = $("#ssValue").val()
    sessionStorage.setItem("MyKey",valueToStore)
    $("#sStoredValue").text(valueToStore)
    toastr.info("MyKey added to sessionStorage")

}

function getLocalStorage(){
    var storedValue = localStorage.getItem("MyKey")
    $("#lStoredValue").text(storedValue)
}

function getSessionStorage(){
    var storedValue = sessionStorage.getItem("MyKey")
    $("#sStoredValue").text(storedValue)
}

function clearLocalStorage(){

    // localStorage.removeItem("MyKey")
    localStorage.clear()
    toastr.info("localStorage was cleared")
    getLocalStorage();
}

function clearSessionStorage(){
    
    sessionStorage.clear()
    toastr.info("localStorage was cleared")
    
    getSessionStorage();
}

function clearStorage(){
    clearLocalStorage();
    clearSessionStorage();
    
}