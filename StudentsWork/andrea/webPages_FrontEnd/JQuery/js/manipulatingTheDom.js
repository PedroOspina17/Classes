function agregar() {
    var valor = $("#txtValor").val();
    var option = $("#txtopcion").val();
    $("#agregarOpcion").append(`<option value="${valor}">${option}</option>`)
    $("#txtValor").val("");
    $("#txtopcion").val("");
}