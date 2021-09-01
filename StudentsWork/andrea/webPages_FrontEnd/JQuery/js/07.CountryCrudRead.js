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
        message += "The Id field must contain a value \n"
    } else if (Id < 0) {
        message += "The Id field must be a positive number \n"
    } else {
        var index = findIndex(Id);

        if (index != -1) {
            if (isEdit == true && indexEdit != index) {
                message += "The Id field already exists you must write a new value \n"
            }else if (isEdit == false) {
                message += "The Id field already exists you must write a new value \n"
            }
        }
    }

    if (Name == "") {
        message += "The Name field must contain a value \n"
    } else if (Name.length > 15) {
        message += "The Name field must contain a maximum of 15 characters \n"
    }

    if (LongName != "" && LongName.length > 50) {
        message += "The LongName field must contain a maximum 50 characters \n"
    }

    if (Description != "" && (Description.length < 10 || Description.length > 250)) {
        message += "The countryDescription field must contain a minimum of 10 characters and a maximum of 250 characters \n"
    }

    if (message != "") {
        swal("validations", message, "error");
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
            toastr.info('information edited correctly!');
            isEdit = false;
        }else{
            toastr.info('information saved correctly!');
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
                <input type="button" id="Delete_${Id}" value="Delete" class="btn btn-danger" onclick="deleteCountry(${Id})">
            </div>
        </td>
        </tr>`
    )
}

function editCountry(Id) {
    isEdit = true;
    var index = findIndex(parseInt(Id));
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

    var index = findIndex(parseInt(Id));

    if (index != -1) {
        countrysInformations.splice(index, 1);
        $(`#${Id}`).remove();
    }
}

function findIndex(Id) {
    var remove = -1;

    $.each(countrysInformations, function (index, value) {
        if (value.Id == Id) {
            remove = index;
            return false;
        }
    });

    return remove;
}