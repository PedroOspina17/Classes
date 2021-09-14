$(document).ready(LoadPage);

function LoadPage(){
    var userInfo = localStorage.getItem("security");
    if(userInfo == null)
    {
        // window.location.href="login.html";
    }
    userInfo.name + " " + userInfo.lastName
    var list = JSON.parse(localStorage.getItem("info"));
    $.each(list, function(index, value){
        createhtmlElement(value);
    });
}


function Create() {
    var info = {
        "key": $("#txtKey").val().trim(),
        "value": $("#txtValue").val().trim()
    };


    // validations
    var msg = "";
    if (info.key == "") {
        msg += "The key field is required. \n";
    }
    if (info.key.indexOf(" ") > -1) {
        msg += "The key should be single word. \n";
    }

    if (info.value == "") {
        msg += "The value field is required. \n";
    }
    debugger;
    if (msg != "") {
        swal(msg);
    } else {
        var list = JSON.parse(localStorage.getItem("info"));
        if (list == null) {
            list = [];
        }

        list.push(info);
        localStorage.setItem("info", JSON.stringify(list));
        createhtmlElement(info);
        toastr.success("The information was saved.");
        $("#txtKey").val("");
        $("#txtValue").val("");
    }

}

function createhtmlElement(info){
    var dthtml= `
        <div id="dt_${info.key}" class="row">
                        <div class="col-3">
                            <dt>${info.key}</dt>
                            <dd>${info.value}
                            </dd>
                        </div>
                        <div class="col">
                            <input type="button" value="Delete" id="btn_${info.key}" class="btn btn-outline-danger"
                                onclick="Delete('${info.key}')">
                        </div>
                    </div>
        `;
        $("#dlInformation").append(dthtml);
}

function Clear() {

}

function Delete(id) {
    var list = JSON.parse(localStorage.getItem("info"));
    $.each(list,function(index,value){
        debugger;
        if(value.key == id){
            list.splice(index,1);
            return false;
        }
    });
    localStorage.setItem("info", JSON.stringify(list));
    $("#dt_"+id).remove();
    toastr.info("The element " + id + " was deleted.")
}