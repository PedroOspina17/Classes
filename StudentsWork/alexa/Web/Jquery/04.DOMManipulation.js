function creardato(){
    var valor1=$("#nombres").val();
    var valor2=$("#valores").val();
        $("#tipodedocumento").append(`<option value="${valor2}"> ${valor1} </option>`)          
    $("#nombres").val("");
    $("#valores").val("");
}

function eliminardato(){
    $("#tipodedocumento").empty();
}

function crearinput(){
    $("#adicionbotones").append(`<div class="form-group textcenter ">
    <label class="w-25 font-weight-bold"> </label>
    <input type="number" id="edad" name="edad" placeholder="por favor ingrese su edad"
        class="form-control textclass">
</div>`);
}

function borrarinput(){
    $("#adicionbotones").remove()

}
function agregarchecked(){
    var check1=$("#datocheck").val();
   $("#adicionbotones").append(`<div class="row"> <div class="form-group col"> 
   <label class="w-100 font-weight-bold"> </label> <div class="form-check">
           <input type="checkbox" class="form-check-input" name="tipodeprograma" id="phyton">
           <label class="form-check-label" for="phyton">python</label> </div>`);
}