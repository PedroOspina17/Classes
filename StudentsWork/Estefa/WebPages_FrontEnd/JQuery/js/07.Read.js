var listaJson = [
    {
        "Id" : 2201,
        "Name" : "Colombia",
        "LongName" : "Colombia's long Name",
        "Description" : "South-american country",
        "Population" : 15.000,
        "Status" : "Active"
    },
    {
        "Id" : 2202,
        "Name" : "Brasil",
        "LongName" : "Brasil's long Name",
        "Description" : "South-american country",
        "Population" : 150.000,
        "Status" : "Inactive"
    },
    {
        "Id" : 2203,
        "Name" : "Peru",
        "LongName" : "Peru's long Name",
        "Description" : "South-american country",
        "Population" : 5.000,
        "Status" : "Active"
    },
    {
        "Id" : 2204,
        "Name" : "EEUU",
        "LongName" : "EEUU's long Name",
        "Description" : "North-american country",
        "Population" : 1500000,
        "Status" : "Active"
    },
    {
        "Id" : 2205,
        "Name" : "Argentina",
        "LongName" : "Argentina's long Name",
        "Description" : "South-american country",
        "Population" : 500.000,
        "Status" : "Active"
    },
]
// Aqui se hace lo del Read
function LlenarTabla(){  
            $.each(listaJson,function(index, value){
            console.log(listaJson[index].Name)
            var input = `<tr id="row_${listaJson[index].Id}">
            <td>${listaJson[index].Name}</td>
            <td>${listaJson[index].Description}</td>
            <td>${listaJson[index].Status}</td>
            </tr>`;
            $("#FormularioPaises").append(input);
        });
}
// Aqui se hace lo del Create
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
   var Id = parseInt($("#idField").val());
   var CountryName = $("#txtCountryName").val();
   var LonCountryName = $("#txtLongCountryName").val();
   var CountryDescription = $("#txtCountryDescription").val();
   var PopulationAprox = parseInt($("#numPopulatioAprox").val());
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
        console.log(listaJson);
   }
}

