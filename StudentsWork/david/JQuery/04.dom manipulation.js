function AlmacenarDatos (){
    console.log("entro")
    var Texto = $("#textomostrar").val();
    var Valor  = $("#Valor").val();
    console.log(Texto)
    console.log(Valor)
    $("#select").append(`<option value="${Valor}">${Texto} ${Valor}</option>`)
    $("#textomostrar").val("");
    $("#Valor").val("");
    } 




