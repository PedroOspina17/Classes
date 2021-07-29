function showCreateNew() {
    $("#CreateNew").show("slow");
}

function hideCreateNew() {
    $("#CreateNew").hide("slow");
}

function saveCreateNew() {

    var name = $("#KnowledgeName").val();
    console.log(name);
    var point = $("#KnowledgePoints").val();
    var message = "";

    if (name == "") {
        message += "el campo name debe contener un valor \n"
    } else if (name.length < 3) {
        message += "el campo name debe contener minimo 3 letras \n"
    }

    if (point == "") {
        message += "el campo point debe contener un valor \n"
    } else if (point < 1 || point > 10) {
        message += "el campo point debe estar entre 1 y 10 \n"
    }

    if (message != "") {
        swal("validaciones", message, "error")
    } else {
        console.log("entro save");
        $("#ListKnowledge").append(
            `<div class="form-check">
            <input type="checkbox" value="${point}" id="${name}" name="Knowledge" class="form-check-input">
            <label for="${name}" class="form-check-label">${name}</label>
            </div>`
        )
    }
}

function getTheJob() {
    var Knowledge = $("[name = 'Knowledge']:checked");
    var totalPoints = 0;
    var positions = $("[name = 'positions']:checked").val();
    var message = "";
    console.log("Knowledge" + Knowledge);

    if (Knowledge.length == 0) {
        message = "debe escoger por lo menos un conocimiento"
    } else {
        $.each(Knowledge, function(index, value) {
            totalPoints += parseInt($(value).val());
        });
    }
    console.log(totalPoints);
    console.log(positions);

    if (message != "") {
        swal("Validaciones", message, "error");
    } else {
        if (positions == "SQLDeveloper" & totalPoints >= 3) {
            message = `You have all the expected requirements. \n The position ${positions} is yours !! Good job.`
        } else if (positions == "BackendDeveloper" & totalPoints >= 8) {
            message = `You have all the expected requirements. \n The position ${positions} is yours !! Good job.`
        } else if (positions == "FrontendDeveloper" & totalPoints >= 8) {
            message = `You have all the expected requirements. \n The position ${positions} is yours !! Good job.`
        } else if (positions == "FullstackDeveloper" & totalPoints >= 13) {
            message = `You have all the expected requirements. \n The position ${positions} is yours !! Good job.`
        } else {
            message = "The user does not meet the expected requirements"
        }

        swal("Resultado", message, "info");

    }





}