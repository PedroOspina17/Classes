function DOMManipulation(){
    var texto = $("#txtTextoMostrar").val();
    var valor = $("#txtValorMostrar").val();
    var input = `<option value='${valor}'>${texto}</option>`;
    $("#divToModify").append(input);
}