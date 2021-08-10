var isEdit = false;
var indexEdit = -1;
var countrysInformations = [{
    "Id": 2201,
    "Name": "Colombia",
    "LongName": "Colombia's long Name",
    "Description": "South-american country",
    "PopulationAprox": 15000,
    "Status": "Active"
},
{
    "Id": 2202,
    "Name": "Brasil",
    "LongName": "Brasil's long Name",
    "Description": "South-american country",
    "PopulationAprox": 150000,
    "Status": "Inactive"
}, {
    "Id": 2203,
    "Name": "Peru",
    "LongName": "Peru's long Name",
    "Description": "South-american country",
    "PopulationAprox": 5000,
    "Status": "Active"
}, {
    "Id": 2204,
    "Name": "EEUU",
    "LongName": "EEUU's long Name",
    "Description": "North-american country",
    "PopulationAprox": 1500000,
    "Status": "Active"
}, {
    "Id": 2205,
    "Name": "Argentina",
    "LongName": "Argentina's long Name",
    "Description": "South-american country",
    "PopulationAprox": 500000,
    "Status": "Active"
}
]

function readInformation() {
    $.each(countrysInformations, function (index, value) {
        addTable(value.Id, value.Name, value.Description, value.Status);
    });
}

function cleanfields() {
    $("#countryId").val("");
    $("#countryName").val("");
    $("#longCountryName").val("");
    $("#countryDescription").val("");
    $("#PopulationAprox").val("");
    $("#Active").prop("checked", true);
}

function saveCountrys() {
    var Id = parseInt($("#countryId").val());
    var Name = $("#countryName").val();
    var LongName = $("#longCountryName").val();
    var Description = $("#countryDescription").val();
    var PopulationAprox = $("#PopulationAprox").val();
    var Status = $('[name="Status"]:checked').val();
    var message = "";

    if (isNaN(Id)) {
        message += "El campo Id debe contener un valor \n"
    } else if (Id < 0) {
        message += "El campo Id debe ser un numero positivo \n"
    } else {
        var index = buscarIndex(Id);
        console.log(index + "index buscar")

        if (index != -1) {
            if (isEdit == true && indexEdit != index) {
                message += "El campo Id ya existe debe escribir un nuevo valor \n"
            }else if (isEdit == false) {
                message += "El campo Id ya existe debe escribir un nuevo valor 1 \n"
            }
        }
    }

    if (Name == "") {
        message += "El campo Name debe contener un valor \n"
    } else if (Name.length > 15) {
        message += "El campo Name debe contener maximo 15 caracteres \n"
    }

    if (LongName != "" && LongName.length > 50) {
        message += "El campo LongName debe contener maximo 50 caracteres \n"
    }

    if (Description != "" && (Description.length < 10 || Description.length > 250)) {
        message += "El campo countryDescription debe contener minimo 10 caracteres y maximo 250 caracteres \n"
    }

    if (message != "") {
        swal("validaciones", message, "error");
    } else {

        addTable(Id, Name, Description, Status);

        var addJsonCountry = {
            "Id": Id,
            "Name": Name,
            "LongName": LongName,
            "Description": Description,
            "PopulationAprox": parseInt(PopulationAprox),
            "Status": Status
        }
        countrysInformations.push(addJsonCountry);
        console.log(countrysInformations);
        if (isEdit == true) {
            deleteCountry(Id);
            toastr.info('informacion editada correctamente!');
            isEdit = false;
        }else{
            toastr.info('informacion guardada correctamente!');
        }
        
        cleanfields();
    }
}

function addTable(Id, Name, Description, Status) {
    $("#country").append(
        `<tr id="${Id}">
        <td>${Name}</td>
        <td>${Description}</td>
        <td>${Status}</td>
        <td>
            <div class="btn-group">
                <input type="button" id="Edit_${Id}" value="Edit" class="btn btn-warning" onclick="editCountry(${Id})">
                <input type="button" id="Edit_${Id}" value="Delete" class="btn btn-danger" onclick="deleteCountry(${Id})">
            </div>
        </td>
        </tr>`
    )
}

function editCountry(Id) {
    isEdit = true;
    var index = buscarIndex(parseInt(Id));
    console.log(index);
    if (index != -1) {
        indexEdit = index;
        var value = countrysInformations[indexEdit];
        console.log(value);
        $("#countryId").val(value.Id);
        $("#countryName").val(value.Name);
        $("#longCountryName").val(value.LongName);
        $("#countryDescription").val(value.Description);
        $("#PopulationAprox").val(value.PopulationAprox);
        console.log(value.Status);
        if (value.Status == "Active") {
            $("#Active").prop("checked", true);
        } else {
            $("#Inactive").prop("checked", true);
        }
    }
}

function deleteCountry(Id) {

    var valorEliminar = buscarIndex(parseInt(Id));

    if (valorEliminar != -1) {
        countrysInformations.splice(valorEliminar, 1);
        $(`#${Id}`).remove();
    }
}

function buscarIndex(Id) {
    var eliminar = -1;

    $.each(countrysInformations, function (index, value) {
        if (value.Id == Id) {
            eliminar = index;
            return false;
        }
    });

    return eliminar;
}