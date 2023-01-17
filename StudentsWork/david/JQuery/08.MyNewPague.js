var ContadorDeId = 0;

function SaveInformation() {
    if (document.getElementById("MarcaProducto").value == "" || document.getElementById("TipoProducto").value == "") {
        swal("CUIDADO", "No se puede dejar ningun campo vacio",
            "warning")
    }
    else {
        var MarcaProducto = document.getElementById("MarcaProducto").value;
        var TipoProducto = document.getElementById("TipoProducto").value;
        var CantidadProducto = document.getElementById("CantidadProducto").value;
    };
    //debugger
    console.log(MarcaProducto);
    console.log(TipoProducto);
    console.log(CantidadProducto);

    ContadorDeId = ContadorDeId + 1;
    console.log("contador", ContadorDeId);

    var FilaCreada =

        `<tr id="${ContadorDeId}" >
            <td><button class="btn btn-outline-light" data-bs-target>${MarcaProducto}</button></td>
            <td class="text-white">${TipoProducto}</td>
            <td class="text-white">${CantidadProducto}</td>
            <td class="btn-group">
                <button class="btn btn-outline-warning" onclick="EditarFila(${MarcaProducto,TipoProducto,CantidadProducto})">Editar</button>
                <button class="btn btn-outline-danger" onclick="EliminarFila(${ContadorDeId})">Eliminar</button>
            </td>
        </tr>`
    $("#CrearTabla").append(FilaCreada);

    CancelAll();

    console.log(ContadorDeId);

}
function CancelAll() {
    console.log("entro al cancelar");
    document.getElementById("MarcaProducto").value = "";
    document.getElementById("TipoProducto").value = "";
    document.getElementById("CantidadProducto").value = "";

};
function EditarFila(MarcaProducto,TipoProducto,CantidadProducto) {
    console.log("entro al editar");
    debugger;
    $("#CantidadProducto").val(CantidadProducto);
    $("#TipoProducto").val(TipoProducto);
    $("#MarcaProducto").val(MarcaProducto);
    
    
    

};
function EliminarFila(IdEliminar) {
    console.log("eliminado", IdEliminar);
    $("#" + IdEliminar).remove();
};