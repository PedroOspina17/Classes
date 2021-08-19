
$(document).ready(PreparePage); // To fire a function when  the page is loaded.

var info = [
    {
     "Id":2201,
     "Name":"Colombia",
     "LongName":"Colombias",
     "Description":"sur America",
     "PopulationAprox":15000,
     "Status":"Active"
    },
    {
     "Id":2202,
     "Name":"Brasil",
     "LongName":"Brasils",
     "Description":"sur America",
     "PopulationAprox":150000,
     "Status":"inactive"
    },
    {
    "Id":2203,
     "Name":"Peru",
     "LongName":"Perus",
     "Description":"sur America",
     "PopulationAprox":5000,
     "Status":"Active"
    },
    {
     "Id":2204,
     "Name":"EEUU",
     "LongName":"EEUUS",
     "Description":"Norte America",
     "PopulationAprox":1500000,
     "Status":"Active"
 
    }
 ];

function PreparePage(){

    $.each(info,function(key,value){

        createRow(value);
    });
}

function createRow(trData){
    var trHtml = `
        <tr id="Row_${trData.Id}">
            <td>${trData.Name}</td>
            <td>${trData.Description}</td>
            <td>${trData.Status}</td>
            <td>
                <div class="btn-group">
                    <input type="button" name="btnUpdate_${trData.Id}" id="btnUpdate_${trData.Id}" value="Update" class="btn btn-warning"
                        onclick="Update(${trData.Id})">
                    <input type="button" name="btnDelete_${trData.Id}" id="btnDelete_${trData.Id}" value="Delete" class="btn btn-danger"
                        onclick="Delete(${trData.Id})">
                </div>
            </td>
        </tr>
        `;

        $("#tableCountry").append(trHtml);
}

function Save(){

    debugger;
    var dataToSave = {
        "Id": parseInt( $("#txtId").val()),
        "Name": $("#txtName").val(),
        "LongName": $("#txtLongName").val(),
        "Description": $("#txtDescription").val(),
        "PopulationAprox": parseInt($("#txtPopulationAprox").val()),
        "Status": $("[name='rbtnStatus']:checked").val()
    };
    var ValidationMessage = "";
    if(isNaN(dataToSave.Id) == true)
    {
        ValidationMessage += "The Id is required \n";
    }
    if(dataToSave.Id < 0){
        ValidationMessage += "The Id should be greater than zero\n";

    }
    
    if(isUpdating == false && findIndex(dataToSave.Id) > -1){
        ValidationMessage += "The Id is already registered, please try another one.\n";
    }

    if(dataToSave.Name.trim() == "")
    {
        ValidationMessage += "The Name is required\n";
    }
    if(dataToSave.Name.length > 15)
    {
        ValidationMessage += "The Name should be less than 15 characters\n";
    }

    if( dataToSave.LongName.length > 0 && dataToSave.LongName.length < 15 || dataToSave.LongName.length > 250 )
    {
        ValidationMessage += "The Long Name should be greater than 15 and less than 250 characters\n";
    }

    if(ValidationMessage.length > 0)
    {
        swal("Validations",ValidationMessage,"error");
    }else
    {
        if(isUpdating == true){
            var idx = findIndex(dataToSave.Id);
            info.splice(idx,1);
            $(`#Row_${Id}`).remove();
        }

        info.push(dataToSave);
        createRow(dataToSave);
        toastr.info("The information was saved.")
        Cancel();
    }

    console.log(dataToSave)
}

function Cancel(){
    $("#txtId").val("")
    $("#txtName").val("")
    $("#txtLongName").val("")
    $("#txtDescription").val("")
    $("#txtPopulationAprox").val("")
    $("#rbtnActive").prop("checked",true)
    $("#txtId").prop("readonly",false)

}
 var isUpdating = false;
function Update(Id){
    var idx = findIndex(Id);
    var infoToShow = info[idx];

    if(idx> -1){
        $("#txtId").prop("readonly",true)
        $("#txtId").val(infoToShow.Id)
        $("#txtName").val(infoToShow.Name)
        $("#txtLongName").val(infoToShow.LongName)
        $("#txtDescription").val(infoToShow.Description)
        $("#txtPopulationAprox").val(infoToShow.PopulationAprox)
        if(infoToShow.Status =="Active"){
            $("#rbtnActive").prop("checked",true)
        }
        else
        {
            $("#rbtnInactive").prop("checked",true)

        }
        isUpdating = true;
        
    }
    
}

function findIndex(Id){
    
    var indexFound = -1;
    $.each(info,function(index,value){
        if(value.Id == Id){
            indexFound = index;
            return true; // The same as Break;
        }
    });
    return indexFound;
}

function Delete(Id){
    debugger;
    var idx = findIndex(Id)
    if(idx > -1){
        info.splice(idx,1);
        $(`#Row_${Id}`).remove();
        
    toastr.info("The information was deleted successfully ");
    }
}
