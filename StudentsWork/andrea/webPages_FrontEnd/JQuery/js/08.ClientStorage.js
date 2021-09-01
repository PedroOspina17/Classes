var ClientStorage = [];
$(document).ready(LoadingPage);

function LoadingPage() {
    var user = localStorage.getItem("user");
    if ( user != null) {
        $("#User").text("bienvenid@ " + user);
        var myJsonList = JSON.parse(localStorage.getItem("ClientStorage"))
        if (myJsonList != null) {
            $.each(myJsonList, function (index, value) {
                addData(value);
                ClientStorage.push(value);
            });
        }
    }else{
        window.location.href = "login.html"
    }
}

function createData() {
    debugger;
    var data = {
        "key": ($("#Key").val()).trim(),
        "value": $("#Value").val()
    }

    var message = "";

    if (data.key == "") {
        message += "please enter key \n"
    } else {

        var index = data.key.indexOf(" ")
        if (index != -1) {
            message += "please enter only one word \n"
        } else {
            var index = findIndex(data.key);
            if (index != -1) {
                message += "please enter another key as that already exists \n"
            }

            if (data.key < 3 && data.key > 15) {
                message += "the word must contain a minimum of 3 characters and a maximum of 16 characters \n"
            }
        }

    }

    if (data.value == "") {
        message += "please enter value \n"
    } else if (data.value.length > 250) {
        message += "the value must contain a maximum of 250 characters \n"
    }

    if (message != "") {
        swal("validations", message, "error");
    } else {
        addData(data);
        ClientStorage.push(data)
        localStorage.setItem("ClientStorage", JSON.stringify(ClientStorage));
        cleanfields();
    }

}

function addData(data) {
    var addData = `
    <div class="row" id="row_${data.key}">
    <div class="col-4">
        <dt>${data.key}</dt>
        <dd>${data.value}</dd>
    </div>
    <div class="col-2">
        <input type="button" value="Delete" class="btn btn-outline-danger" onclick="Delete('${data.key}')">
    </div>
</div>`

    $("#Storage").append(addData);
}

function findIndex(key) {

    var indexFound = -1;
    $.each(ClientStorage, function (index, value) {
        if (value.key == key) {
            indexFound = index;
            return true;
        }
    });
    return indexFound;
}

function Delete(u) {
    var index = findIndex(u);

    if (index != -1) {
        ClientStorage.splice(index, 1);
        $(`#row_${u}`).remove();
        localStorage.setItem("ClientStorage", JSON.stringify(ClientStorage)); x
    }

}

function emptyList() {
    $("#Storage").empty();
    localStorage.removeItem("ClientStorage");
}

function out() {
    localStorage.removeItem("user");
    window.location.href = "login.html"
}

function cleanfields() {
    $("#Key").val("");
    $("#Value").val("");
}