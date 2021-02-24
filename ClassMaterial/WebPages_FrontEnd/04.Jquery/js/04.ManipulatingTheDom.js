var idCounter = 5;

function createInput(){
    // One point to highlight is that you can concanetate any value you consider in order to assign values dinamically to the element you are creating.
    $("#divToModify").append(
        `<input type='text' class='form-control' id='input${idCounter}' placeholder='This is the input ${idCounter}' name='input${idCounter}' />`);
    idCounter++;
    toastr.success("The input was added.");
}

function deleteInput(){
    $("#input1").remove();
    toastr.error("The input was deleted.")
}

function emptyDiv(){
    $("#divToModify").empty();
    toastr.warning("All the elements inside the #divToModify div were deleted");
}

function createNested(){
    // Example. To create a div with some more tags inside. Just use the special quote mark (`) to allow identation and easy development and concatenation. 
    
    $("#divToModify").append(`
        <div class="form-group">
            <label for='input${idCounter}'>Some label for field ${idCounter}</label>
            <input type='text' class='form-control' id='input${idCounter}' placeholder='This is the input ${idCounter}' name='input${idCounter}' />
        </div>
    `);
    idCounter++;
    toastr.info("The nested element was added.");
}

function createNested2(){
    //This is exactly the same of the previous implementation

    //This is to create the elements IN MEMORY. This is not in the page yet.
    var container = $("<div class='form-group'></div>");
    container.append(`<label for='input${idCounter}'>Some label for field ${idCounter}</label>`);
    container.append(`<input type='text' class='form-control' id='input${idCounter}' placeholder='This is the input ${idCounter}' name='input${idCounter}' />`);
    
    // This takes the elements stored in the variable container and add them all to the div 'divToModify'
    $("#divToModify").append(container);
    idCounter++;
    toastr.success("The nested element was added in the second way")
    
}
