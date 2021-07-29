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
    $.each(countrysInformations, function(index, value) {
        $("#country").append(
            `<tr id="${value.Id}">
            <td>${value.Name}</td>
            <td>${value.Description}</td>
            <td>${value.Status}</td>
            </tr>`
        )
        console.log(value.Name);
    });

}