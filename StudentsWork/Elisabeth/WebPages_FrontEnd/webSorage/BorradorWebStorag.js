var listClients_webStorage= [];

function SaveInfoStorage(){
    //debugger;
    var infoKey = ($("#idInputkey").val()).trim();
    
    var infoValue = $("#idInputValue").val();

    var msgError = "";
    if (infoKey=="") {
        msgError+=("insert key \n")
    }

    if (infoValue=="") {
        msgError+=("insert value \n")
    }

    if (infoKey.length<3 || infoKey.length>11) {
        msgError+=("insert key greater than 3 characters minimum and lest tan 10 caracteres maximum \n")
    }
    
    if (infoValue.length>250) {
        msgError+=("insert value greater lest tan 10 caracteres maximum\n")
    }

    var indexOf_infoKey = infoKey.indexOf(" ");
    if (indexOf_infoKey!=-1) {
        msgError+=("the key should be a single word\n")
    }

    $.each(listClients_webStorage, function(index,value){
        //debugger;
        if(infoKey==value.key){
            msgError+=("The key is repeat \n")
            return true
        }

    });

    if (msgError == "") {
        //debugger;
        var jaisonClients = {
            "key": infoKey,
            "value": infoValue,
        };

        listClients_webStorage.push(jaisonClients)

        localStorage.setItem("jaisonClients_LocalStorage", JSON.stringify(listClients_webStorage))

        $("#listKeyValues").append(`
            <div class="row" id="row_${infoKey}">
                <div class="col-4">
                    <dt>${infoKey}</dt>
                    <dd>${infoValue}</dd>
                 </div>
                <div class="col-2">
                    <input type="button" value="Delete" name="buttonDelete" id="buttonDelete_dt"
                    class="btn btn-outline-danger" onclick="deleteKeyValue('${infoKey}')">
                </div>
            </div>
        `)
        $("#idInputkey").val("");
        $("#idInputValue").val("");
    }
    else {
        swal("validation: ", msgError, "error")
    }
}

function deleteKeyValue(info) {
    //debugger;
    $.each(listClients_webStorage, function(index,value){
        debugger;
        if(info==value.key){
            listClients_webStorage.splice(index, 1);
            return true
        }
    });
    $("#row_"+info).remove();

}

function ClearInfoStorage(info) {
    //debugger;
    if (listClients_webStorage!="") {
        $("#IdElementToChange").empty()
    }


}