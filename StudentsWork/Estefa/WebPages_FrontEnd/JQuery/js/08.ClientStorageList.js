var countRow = 1;
$(document).ready(PageLoad);
function PageLoad (){
    if(localStorage.getItem("Logueado") != null){
        var UsuarioLogueado = localStorage.getItem("Logueado");
        $('#NombreUser').append(`<h5 class="text-right">Bienvenido: ${UsuarioLogueado}</h5>`);
        for(var i = 0; i<localStorage.length;i++){
            var keyOpen = localStorage.key(i);
            var valueOpen = localStorage.getItem(keyOpen);
            if(keyOpen != 'Logueado' && keyOpen != 'Role'){//Se hace esta condición para que no muestre la data que estaLogueado y el rol
                ListadoKeyOpen =`
                    <dt id="dtRow_${countRow}">${keyOpen}</dt>
                    <dd id="ddRow_${countRow}">${valueOpen}</dd>`
                $('#ListadoKey').append(ListadoKeyOpen);
                var btnListadoKeyOpen= `
                <input type="button" class="btn btn-outline-danger form-group" id="btnClearDataKeyRow_${countRow}" name="btnClearDataKey" value="Delete" onclick="DeleRow('${countRow}')">`
                $('#btnListadoKey').append(btnListadoKeyOpen);
                countRow = countRow + 1;  
            }          
        }
    }else{        
        window.location.href = "../../WebPages_FrontEnd/jQuery/01.logginStorage.html";
    }
}

function Logout(){
    localStorage.removeItem("Logueado");
    window.location.href = "../../WebPages_FrontEnd/jQuery/01.logginStorage.html";
    
}

function CreateData(){
    var errorMsg = "";
    var key = $('#txtKey').val();
    var value = $('#txtValue').val();
    
    for (var i=0; i<localStorage.length; i++){
        var keyOpen = localStorage.key(i);
        var valueOpen = localStorage.getItem(keyOpen);

        if(keyOpen == key && valueOpen == value){
            errorMsg += "El campo Key: " + key + " y el campo value: " + value + " ya se encuentran registrados en el sistema \n";
            break;
        }
    }
    if(key.indexOf(' ') != -1){
        errorMsg += "El campo Key: "+ key + " no debe contener espacios, debe ser una letra\n";
    }
    if((key == null || value == null) || (key.length <= 2 || key.length > 11)){
        errorMsg += "El campo Key: "+ key + "debe de ser mayor a 2 y menor a 11 o diferente de vacio \n";
        errorMsg += "El campo Value: "+ value + "no debe ser vacio \n";
    }if(value == null & value.length > 250){
        errorMsg += "El campo Value: "+ value + "debe de ser menor a 250 \n";
    }
    if(errorMsg == ""){
        var ListadoKeyTem =`
            <dt id="dtRow_${countRow}">${key}</dt>
            <dd id="ddRow_${countRow}">${value}</dd>`
        $('#ListadoKey').append(ListadoKeyTem);

        var btnListadoKeyTem = `
            <input type="button" class="btn btn-outline-danger form-group" id="btnClearDataKeyRow_${countRow}" name="btnClearDataKey" value="Delete" onclick="DeleRow('${countRow}')">`
        $('#btnListadoKey').append(btnListadoKeyTem);
        localStorage.setItem(key,value) //Se agregan registros al Local storage
        $('#txtKey').val("");
        $('#txtValue').val("");
        countRow = countRow + 1;
        toastr.info("Se creó el registro Key: " + key + " Value: " + value + "\n");
    }else{
        $('#txtKey').val("");
        $('#txtValue').val("");
        swal(errorMsg);
    }    
}

function LimpiarData(){
    localStorage.clear();
    $('#ListadoKey').empty();
    $('#btnListadoKey').empty();
}

function DeleRow (id){
    var keyRow = $('#dtRow_' + id).text();
    localStorage.removeItem(keyRow);
    $('#dtRow_'+ id).remove();
    $('#ddRow_'+ id).remove();
    $('#btnClearDataKeyRow_'+ id).remove();
}