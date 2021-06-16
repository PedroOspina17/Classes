funcion vl1(){
    var valor1=$("#nombres").val();
}

funcion vl2(){
    var valor2=$("#valores").val();
}
function mostrardatos(){
    console.log("mi funcion esta bien");
    var vl1=$("#nombres").val();
    var vl2=$("#valores").val();
    var mostrar=`valor ${vl1}  (${vl2}) `;

    function createinput(){
        $("adicionbotones").append(`<select nombre="tipodedocumento" id="tipodedocumento" class="form-control">
        <option value="0"> C.C</option>
        <option value="1"> TI</option>
        <option value="2"> C.E</option>
    </select>`);
