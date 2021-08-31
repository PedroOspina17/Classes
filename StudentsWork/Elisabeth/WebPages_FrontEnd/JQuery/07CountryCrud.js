var CountryList = [
    {
        "id": 2201, 
        "name":  "Colombia",
        "longName":  "Colombia's long Name",
        "description": "South-american country",
        "populationAprox": 15000,
        "status": "Active"
    },
    {
        "id":  2202, 
        "name":  "Brasil",
        "longName":  "Brasil's long Name",
        "description":  "South-american country",
        "populationAprox":  150000,
        "status": "Inactive"
    },
    {
        "id": 2203, 
        "name":  "Peru",
        "longName":  "Peru's long Name",
        "description": "South-american country",
        "populationAprox": 5000,
        "status": "Active"
    },
    {
        "id": 2204, 
        "name":  "EEUU",
        "longName":  "EEUU's long Name",
        "description": "North-american country",
        "populationAprox": 500000,
        "status": "Active"
    },
    {
        "id": 2205, 
        "name":  "Argentina",
        "longName":  "Argentina's long Name",
        "description": "South-american country",
        "populationAprox": 1500000,
        "status": "Active"
    }

]

function readCountryList(){
    $.each(CountryList, function(index, value) {console.log(value.name)
    $("#CountryTable").append(`
    <tr id= "Row_${value.id}">
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.description}</td>
        <td>${value.status}</td>
        <td>
            <input type="button" value="edit" id="buttonEdit" class="btn btn-warning onclick="editInfoRow("Row_${value.id}")">
            <input type="button" value="delete" id="buttonDelete" class="btn btn-danger" onclick="deleteInfoRow("Row_${value.id}")">
        </td>
    </tr>`)
});

function deleteInfoRow(id){
    $.each(CountryList, function(index,value) {console.log(value.index)
        
        
        if (id = index && id!= "") {
            
        }
    });
    
}

function editInfoRow(){
    
}

}

function deleteInformationCountry(){
    $("#idCountry").val("");
    $("#nameCountry").val("");
    $("#longCountryName").val("");
    $("#countryDescription").val("");
    $("#populationAprox").val("");
    $("#statusActive").prop("checked",true);
}

function saveInformationCountry(){
    
    var idCountry = parseInt($("#idCountry").val());
    var nameCountry = $("#nameCountry").val();
    var longCountryName = $("#longCountryName").val();
    var countryDescription = $("#countryDescription").val();
    var populationAprox = parseInt($("#populationAprox").val());
    var status = $("input[name='status']:checked").val();
    
    var errorMsg = "";
    if (isNaN(idCountry)) {
        errorMsg+= "insert Id Country \n";
    }
    if (idCountry<0) {
        errorMsg+= "the id Country is not positive \n";
    } 
    
    $.each(CountryList, function(index, value) {
        if (idCountry==value.id) {
        errorMsg+= "id invaled, this id Country is repeated \n";  
        }
    });

    if (nameCountry=="") {
        errorMsg+= "insert the Country name \n";
        }
    if (nameCountry.length > 16) {
        errorMsg+= "insert name short, 15 characters maximum  \n";
        }
    if (longCountryName.length > 50) {
        errorMsg+= "insert name short, maxime 50 caracteres \n";
        }
    if (countryDescription.length<10 && countryDescription.length>250) {
        errorMsg+= "insert description greater than 10 characters minimum and lest tan 250 caracteres maximum\n";
        }
    if (errorMsg == "") {
        debugger;
        var jaisonCountry = {
            "id": idCountry,
            "name": nameCountry,
            "longName": longCountryName,
            "description": countryDescription,
            "populationAprox": populationAprox,
            "status": status
        }
        CountryList.push(jaisonCountry);
        var html = `
        <tr>
            <td>${jaisonCountry.id}</td>
            <td>${jaisonCountry.name}</td>
            <td>${jaisonCountry.description}</td>
            <td>${jaisonCountry.status}</td>
        </tr>`;

        $("#CountryTable").append(html)

        toastr.success("The information the Country was added.");

        deleteInformationCountry()
    }
    
    else if(errorMsg != ""){
        swal(errorMsg);
    }
}

