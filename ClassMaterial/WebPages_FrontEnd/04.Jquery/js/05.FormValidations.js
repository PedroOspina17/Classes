function validateForm(){
    var errorMsg = "";

    if($("#user").val().trim() ==""){ // To validate if a field is required. 
        errorMsg += "The user cannot be null \n";
    }

    if($("#user").val().length > 50){ // To validate input's length
        errorMsg += "The user cannot be greater than 50 characters." 
    }
    if(parseInt( $("#age").val()) > 5){ // To compare the numeric values
        errorMsg += "The User's age cannot be greater than 5. \n";
    }

    if($("#doctype").val().trim() == ""){
        errorMsg += "The document type should be selected. \n";
    }

    if(new Date($("#dob").val() + " 00:00:00") > new Date()){ // To validate dates with the current date.

        errorMsg += "The dob cannot be greater than today's date.";
    }

    if(errorMsg != ""){
        swal(errorMsg);
    }
}