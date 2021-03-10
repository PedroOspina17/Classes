function MostrarFormNewKnowledge(){
    $("#FormNewKnowledge").show('slow');
}
function OcultarFormNewKnowledge(){
    $("#FormNewKnowledge").hide('slow');
}
function SaveKnowledge(){
    var nameKnowledge = $("#txtNameKnowledge").val(); 
    var pointsKnowledge = $("#numberPointKnowledge").val();
    var addCheckbox = `<div class="form-check"><input type="checkbox" class="form-check-input" name="knowledge" id="${nameKnowledge}" value="${pointsKnowledge}"><label for="${nameKnowledge}" class="form-check-label">${nameKnowledge}</label></div>`;
    
    if(nameKnowledge != "" && pointsKnowledge != ""){
        if((nameKnowledge.length>2)&&((pointsKnowledge >= 1 && pointsKnowledge<11))){
        $("#checkbox").append(addCheckbox);
        }else{
            swal("Por favor valide las indicaciones: " 
            + "1.Los campos deben estar llenos"
            + " 2.El conocimiento debe de contener mínimo 3 letras"
            + " 3.El puntaje debe estar entre 1 y 10");
        }
    }else{
        swal("Por favor valide las indicaciones: " 
        + "1.Los campos deben estar llenos"
        + " 2.El conocimiento debe de contener mínimo 3 letras"
        + " 3.El puntaje debe estar entre 1 y 10");
    }
}
function GetJob(){    
    var knowledgeList = $("input[name='knowledge']:checked");
    var PointsPositions = $("input[name='radioJobs']:checked").attr("description"); 
    var knowledge = 0;

    if(knowledgeList.length>0 && PointsPositions != 'undefined'){
        $.each(knowledgeList, function(index, value){;
            var valor = $(value).val();
            if( knowledge != 0){
                knowledge = parseInt(valor) + parseInt(knowledge);
            }else{ 
                knowledge += valor;
            }
        }); 
        if(knowledge>=parseInt(PointsPositions)){
            swal("Cumple con el puntaje requeridos para el puesto");
        }else{
            swal("No cumple con el puntaje requeridos para el puesto");
        }
    }else{
        swal("Debe de llena al menos uno conocimiento y un puesto");
    }   
}GetJob();