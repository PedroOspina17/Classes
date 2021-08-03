function ClearField(){
     $("#idField").val("");
     $("#txtCountryName").val("");
     $("#txtLongCountryName").val("");
     $("#txtCountryDescription").val("");
     $("#numPopulatioAprox").val("");
     $("#radioActive").prop("checked",true);
}
function SaveField(){
    var errorMsg = "";
    var Id = $("#idField").val();
    var CountryName = $("#txtCountryName").val();
    var LonCountryName = $("#txtLongCountryName").val();
    var CountryDescription = $("#txtCountryDescription").val();
    var PopulationAprox = $("#numPopulatioAprox").val();
    var radioActive =  $("input[name='Status']:checked").val();
    if(Id < 0){
        errorMsg += "Por favor el ID debe ser positivo \n"
    }if(Id == ""){
        errorMsg += "Por favor el ID debe tener informaición \n"
    }if(CountryName.length > 15){
        errorMsg += "Por favor Country name debe ser menor a 15 caracteres \n"
    }if(CountryName == ""){
        errorMsg += "Por favor Country name debe tener informaición \n"
    }if(LonCountryName > 50){
        errorMsg += "Por favor Long Country name debe ser menor a 50 caracteres \n"
    }if(CountryDescription != ""){
        if((CountryDescription.length < 9) || (CountryDescription >=250)){
            errorMsg += "Por favor  Country descriptión debe ser mayot a 10 y  menor a 250 caracteres \n"
        }
    }if(errorMsg != ""){
        swal(errorMsg);
    }else{
        var InfoForm = 
            {
                "Id" : Id,
                "Name" : CountryName,
                "LongName" : LonCountryName,
                "Description" : CountryDescription,
                "Population" : PopulationAprox,
                "Status" : radioActive
            }
            var input = `<tr id="row_${InfoForm.Id}">
            <td>${InfoForm.Name}</td>
            <td>${InfoForm.Description}</td>
            <td>${InfoForm.Status}</td>
            </tr>`;
            $("#FormularioPaises").append(input);
            
            listaJson.push(InfoForm);// Adicionamos la nueva columna ingresada en la tabla
    }
}