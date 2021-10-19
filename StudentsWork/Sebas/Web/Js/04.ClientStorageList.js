$(document).ready(pageLoad);

function pageLoad() {

    var security = localStorage.getItem("Security_validation");

    if (security == null) {
        window.location.href = "loggin_NP.html"
    }
    var list = JSON.parse(localStorage.getItem("data"));
    $.each(list, function (index, value) {
        createHtmlItem(value);
    });
    
    var user = localStorage.getItem("Security_validation");
    if (localStorage.getItem("Security_validation") != null) {
        $("#user").append("<h3 >Welcome " + user + " !</h3>");
    }
    if (localStorage.getItem("Role") == 'Admin') {
        $("#Admin").append(`<a class="nav-link active" href="09.listUsers.html">List Users</a>`);
    }
}

function validateForm() {

    var errorMsg = "";

    var data = {
        "key": $('#textKey').val().trim(),
        "value": $('#textValue').val()
    };

    var list = JSON.parse(localStorage.getItem("data"));
    $.each(list, function (index, value) {
        if (value.key == data.key && value.value == data.value) {
            errorMsg += "The key: " + data.key + " with the value: " + data.value + " are already registered in the database \n";
            return false;
        }
    });

    /*for (var i = 0; i < localStorage.length; i++) {
 
        var key_LS = localStorage.key(i);
        var value_LS = localStorage.getItem(keyOpen);
 
        if (key_LS == data.key && value_LS == data.value) {
            errorMsg += "The key: " + data.key + " with the value: " + data.value + " are already registered in the database \n";
            break;
        }
    }*/

    if (data.key == "") {
        errorMsg += "The user cannot be null. \n";
    }
    if (data.key.length < 3) {
        errorMsg += "the user must contain more than 3 characters. \n"
    }
    if (data.key.length > 10) {
        errorMsg += "The user cannot be greater than 10 characters. \n"
    }
    if (data.key.indexOf(' ') != -1) {
        errorMsg += "username must not contain spaces. \n"
    }

    if (data.value.trim() == "") {
        errorMsg += "password cannot be null. \n";
    }
    if (data.value.length > 250) {
        errorMsg += "The user cannot be greater than 250 characters. \n"
    }

    if (errorMsg != "") {
        swal(errorMsg);
    } else {

        var list = JSON.parse(localStorage.getItem("data"));

        if (list == null) {
            list = [];
        }

        list.push(data);
        localStorage.setItem("data", JSON.stringify(list));
        createHtmlItem(data);
        toastr.success("The information was save.");
        $('#textKey').val("");
        $('#textValue').val("");

    }
}

function createHtmlItem(data) {
    var dtHtml = `
    <div id="dt_${data.key}" class="row">
        <div class="col-3">
            <div>
                <dt>${data.key}</dt>
                <dd >${data.value}</dd>
            </div>
        </div>
        <div class="col">
            <input type="button" class="btn btn-outline-danger" id="bton_${data.key}"
                name="bton_${data.key}" value="Delete" onclick="deleteItem('${data.key}')">
        </div>
    </div>`;
    $('#dlItems').append(dtHtml);
}

function deleteItem(key) {

    var list = JSON.parse(localStorage.getItem("data"));
    $.each(list, function (index, value) {
        if (value.key == key) {
            list.splice(index, 1)
            return false;
        }
    });
    localStorage.setItem("data", JSON.stringify(list));
    $("#dt_" + key).remove();
    toastr.info("The element " + key + " was delete.")
}

function clearData() {
    var list = JSON.parse(localStorage.getItem("data"));
    $.each(list, function (index, value) {
        $("#dt_" + value.key).remove();
    });
    localStorage.clear();
}

function LogOut(){
    localStorage.removeItem("Role")
    localStorage.removeItem("Security_validation")    
    window.location.href="09.loggin.html"
}