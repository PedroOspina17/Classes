var idCounter = 5;

function createInput(){
    //Please note the quotation marks ("") use. 
    // Since the element to add is a string all the properties should use the single quotation mark.
    // Example: instead of id="inputId" use id='inputId' 
    // Another point to highlight is that you can concanetate any value you consider in order to assign values dinamically to the element you are creating.
    $("#divToModify").append("<input type='text' class='form-control' id='input"+idCounter+"' placeholder='This is the input "+idCounter+"' name='input"+idCounter+"' />");
    idCounter++;
}

function emptyDiv(){
    $("#divToModify").empty();
}

function deleteInput(){
    $("#input1").remove()
}