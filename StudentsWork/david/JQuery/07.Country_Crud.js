var ListaPaises = [
    {
        "ID": 2201,
        "NAME": "Colombia",
        "LONGNAME": "Colombia's long Name",
        "DESCRIPTION": "South-american country",
        "POPULATION": 15000,
        "STATUS": "Active"

    },
    {
        "ID": 2202,
        "NAME": "Brasil",
        "LONGNAME": "Brasil's long Name ",
        "DESCRIPTION": "South-american country",
        "POPULATION": 150000,
        "STATUS": "Inactive"
    },
    {
        "ID": 2203,
        "NAME": "Peru",
        "LONGNAME": "Peru's long Name",
        "DESCRIPTION": "South-american country",
        "POPULATION": 5000,
        "STATUS": "Active"

    },
    {
        "ID": 2204,
        "NAME": "EEUU",
        "LONGNAME": "EEUU's long Name",
        "DESCRIPTION": "North-american country",
        "POPULATION": 1500000,
        "STATUS": "Active"

    },
    {
        "ID": 2205,
        "NAME": "Argentina",
        "LONGNAME": "Argentina's long Name",
        "DESCRIPTION": "South-american country",
        "POPULATION": 500000,
        "STATUS": "Active"

    },

]
function loadInfo() {
    $.each(ListaPaises, function (index, value) {
        console.log(value);
        var Row =
            `<tr id="Row_${value.ID}">
                <td>${value.NAME}</td>
                <td>${value.DESCRIPTION}</td>
                <td>${value.STATUS}</td>
                <td>
                    <div class="btn-group">
                        <input id="Edit_${value.ID}" class="btn btn-success" type="button" value="Edit" onclick="Edit(${value.ID})">
                        <input id="Delete_${value.ID}" class="btn btn-danger" type="button" value="Delete" onclick="Delete(${value.ID})">
                    </div>
                </td>
                
             </tr>`;
        $("#table1").append(Row)

    });
}
function CancelClean() {
    $("[Name=Id]").val("");
    $("[Name=CountryName]").val("");
    $("[Name=LongCountryName]").val("");
    $("[Name=CountryDscription]").val("");
    $("[Name=Populationaprox]").val("");
}

function ValidationSave() {
    var Errors = "";
    var Id = $("[Name=Id]").val();
    var CountryName = $("[Name=CountryName]").val();
    var LongCountryName = $("[Name=LongCountryName]").val();
    var CountryDscription = $("[Name=CountryDscription]").val();
    var CountrPopulationaprox = $("[Name=Populationaprox]").val();
    var Status = $("[Name=Status]:checked").val();

    if (parseInt(Id) < 0) {
        Errors += "-The coutry's id should be greather than 0.  \n";
        console.log("The coutry's id should be greather than 0");
    }
    if (Id.trim() == "") {
        Errors += "-The Id can't be null.  \n";
        console.log("The Id can't be null");
    }
    if (CountryName == "") {
        Errors += "-The coutry name can't be null. \n";
        console.log("The coutry name can't be null");
    }
    if (CountryName.length > 15) {
        Errors += "-The country name should be less than 15 characters. \n";
        console.log("The country name should be less than 15 characters");
    }
    if (LongCountryName.length > 50) {
        Errors += "-The long country name should be less than 50 characters.  \n";
        console.log("The long country name should be less than 50 characters");
    }
    if (CountryDscription.length < 10 || CountryDscription.length > 250) {
        Errors += "-the country description should be greather than 10 \n characters or should be less than 250 characters. \n";
        console.log(" the country description should be greather than 10 characters or \n should be less than 250 characters ")
    }
    if (Errors != "") {
        swal("SORRY", Errors, "error");
    }
    else {
        var Row =
            `<tr id="Row_${Id}">
            <td>${CountryName}</td>
            <td>${CountryDscription}</td>
            <td>${Status}</td>
            <td>
                <div class="btn-group">
                    <input id="Edit_${Id}" class="btn btn-success" type="button" value="Edit" onclick="Edit(${Id})">
                    <input id="Delete_${Id}" class="btn btn-danger" type="button" value="Delete" onclick="Delete(${Id})">
                </div>
            </td>
            
         </tr>`;
        $("#table1").append(Row)
        var RecolectList = {
            "ID": parseInt(Id),
            "NAME": CountryName,
            "LONGNAME": LongCountryName,
            "DESCRIPTION": CountryDscription,
            "POPULATION": CountrPopulationaprox,
            "STATUS": Status

        }
        ListaPaises.push(RecolectList)
        console.log(ListaPaises)
    }
    $("[Name=Id]").val("");
    $("[Name=CountryName]").val("");
    $("[Name=LongCountryName]").val("");
    $("[Name=CountryDscription]").val("");
    $("[Name=Populationaprox]").val("");
    toastr.info("The row was created")
}
function Edit(Id1) {

    $.each(ListaPaises, function (index, value) {


        if (Id1 == value.ID) {
            console.log(Id1)
            console.log(value)
            $("[Name=Id]").val(value.ID);
            $("[Name=CountryName]").val(value.NAME);
            $("[Name=LongCountryName]").val(value.LONGNAME);
            $("[Name=CountryDscription]").val(value.DESCRIPTION);
            $("[Name=Populationaprox]").val(value.POPULATION);
            console.log( value.STATUS, "Inactive" )
            if ( value.STATUS == "Inactive"  ) {
                $("#Inactive").prop("checked", true)
            }
            else{
                $("#Active").prop("checked", true)
            }
        }


    });


    toastr.info("se muestra " + Id1)
}

function Delete(Id2) {

    var Index_found = -1;
    $.each(ListaPaises, function (index, value) {
        console.log(value.ID, "==", Id2)
        if (value.ID == Id2) {
            Index_found = index
        }

    });
    console.log(Index_found)
    if (Index_found > -1) {
        ListaPaises.splice(Index_found, 1);
        console.log("Row_" + Id2)
        $("#Row_" + Id2).remove();
        toastr.info("The row was eliminated");
    }
    console.log(ListaPaises);
}