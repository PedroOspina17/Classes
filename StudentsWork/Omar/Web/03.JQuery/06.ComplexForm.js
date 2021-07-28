$(document).ready(function () {
    hideFormCreate();
    
});

function hideFormCreate(){
    $("#formCreate").hide();
}

function showCreateNew(){
    $("#formCreate").show("slow");
    emptyCreateNew();
}

function createNew(){
    msgValid();
    var newKnow = $("#nameCreate").val();
    var newPoints = $("#pointsCreate").val();
   if (newKnow.length>=3 && newPoints>0 && newPoints<=10){ /* to check*/
        $("#newKnowledge").append(
            `<div class="form-check">
            <input type="checkbox" id="${newKnow}" val-know="${newPoints}" name="know" class="form-check-input">
            <label for="input${newKnow}" class="form-check-label">${newKnow}</label>
        </div>`
        );
        hideFormCreate();
        
    }
    
}


var positions=0;
   
function sumKnow(){
    var option =0;
    selectOption();
    var knowledge = $('.form-check-input:checked');
    parseInt(knowledge);
    console.log(knowledge);

    $.each(knowledge, function(index, value){
        console.log(value);
        option += parseInt($(value).attr('val-know'));
    });
    $("#result").val(option);
    
    positions=parseInt($("input[name='position']:checked").attr("val-position"));
    if(option>=positions) {
        swal("Your score is "+ option+".\nCongrats!\n Welcome to the world of the technology.");
    }
    else{
        swal("Your score is "+ option+".\n Sorry, you don't qualify")
    }
   
    
}


function selectOption(){/* to check*/
   positions =parseInt($("input[name='position']:checked").attr("val-position"));
   //swal('Your option selected is '+ positions)
}

function emptyCreateNew(){
    $('#nameCreate').val("");
    $('#pointsCreate').val("");
}

function emptyChecks(){
    $('.form-check-input').prop('checked', false);
    $('[name="position"]').prop('checked', false);
    $("#result").val("");
}

function msgValid(){
    var msg = "";
    if ($("#nameCreate").val().length<3){
        msg += "This field cannot be less than 3 characters \n"
    }
    if ($("#pointsCreate").val()<=0 || $("#pointsCreate").val()>10){
        msg += "The score cannot be less than 0 or equal to or greater than 10 \n"
    }
    if(msg != ""){
        swal(msg);
    }
    
}

