function LeerLocalStorage() {
    var Datos = localStorage.getItem("ListaProductos");
    if (Datos != null) {
        Datos = JSON.parse(Datos);
        Datos.forEach(element => {
            var FilaCreada =
                `<tr id="${element.Id}" >
            <td><button class="btn btn-outline-light" data-bs-target>${element.Marca}</button></td>
            <td class="text-white">${element.Tipo}</td>
            <td class="text-white">${element.Cantidad}</td>
            <td class="btn-group">
                <button class="btn btn-outline-warning" onclick="EditarFila('${element.Marca}','${element.Tipo}',${element.Cantidad})">Editar</button>
                <button class="btn btn-outline-danger" onclick="EliminarFila(${element.Id})">Eliminar</button>
            </td>
        </tr>`
            $("#CrearTabla").append(FilaCreada);
            ContadorDeId = ContadorDeId + 1
        });
    }
}

var ContadorDeId = 0;
var MarcaProducto
var TipoProducto
var CantidadProducto
var DatosGuardados

function SaveInformation() {
    var Datos = localStorage.getItem("ListaProductos");
    Datos = JSON.parse(Datos);
    $.each(Datos, function (index,value){
        if (value.Id > ContadorDeId){
            ContadorDeId = value.Id
        }
    })
    console.log("este es el id mas alto que hay:", ContadorDeId)
    ContadorDeId = ContadorDeId + 1;

    if (document.getElementById("MarcaProducto").value == "" || document.getElementById("TipoProducto").value == "") {
        swal("CUIDADO", "No se puede dejar ningun campo vacio",
            "warning")
    }
    else {
        MarcaProducto = document.getElementById("MarcaProducto").value;
        TipoProducto = document.getElementById("TipoProducto").value;
        CantidadProducto = parseInt(document.getElementById("CantidadProducto").value);
        DatosGuardados = {
            "Marca": MarcaProducto,
            "Tipo": TipoProducto,
            "Cantidad": CantidadProducto,
            "Id": ContadorDeId,
        };
    };

    
    
    var DatosEnString = JSON.stringify(DatosGuardados);
    

    var FilaCreada =
        `<tr id="${ContadorDeId}" >
           <td><button class="btn btn-outline-light" data-bs-target>${MarcaProducto}</button></td>
           <td class="text-white">${TipoProducto}</td>
          <td class="text-white">${CantidadProducto}</td>
          <td class="btn-group">
             <button class="btn btn-outline-warning" onclick="EditarFila('${MarcaProducto}',${TipoProducto}',${CantidadProducto}',${ContadorDeId})">Editar</button>
             <button class="btn btn-outline-danger" onclick="EliminarFila(${ContadorDeId})">Eliminar</button>
          </td>
        </tr>`
    $("#CrearTabla").append(FilaCreada);
    CancelAll();
    var Lista = JSON.parse(localStorage.getItem("ListaProductos"));
    if (Lista != undefined) {
        Lista.push(DatosGuardados);
    }
    else {
        Lista = [
            DatosGuardados
        ]
    }
    localStorage.setItem("ListaProductos", JSON.stringify(Lista))
}

function CancelAll() {
    $("#MarcaProducto").val("");
    $("#TipoProducto").val("");
    $("#CantidadProducto").val("");

};

function EditarFila(MarcaProducto, TipoProducto, CantidadProducto, ContadorDeId) {
    $("#CantidadProducto").val(CantidadProducto);
    $("#TipoProducto").val(TipoProducto);
    $("#MarcaProducto").val(MarcaProducto);
    console.log("variables retornadas dentro de la funcion editar...", MarcaProducto, TipoProducto, CantidadProducto)
    
};

function EliminarFila(IdEliminar) {
    var IndexEencontrado
    var ReturnLocalStorage = JSON.parse(localStorage.getItem("ListaProductos"));
    $.each(ReturnLocalStorage, function (index, value) {
        var valorValue = value.Id
        console.log("este es el valor de value", valorValue)
        if (value.Id == IdEliminar) {
            IndexEencontrado = index
        }
    })
    ReturnLocalStorage.splice(IndexEencontrado, 1)
    localStorage.setItem("ListaProductos", JSON.stringify(ReturnLocalStorage))
    $("#" + IdEliminar).remove();
    console.log("eliminar fila", ReturnLocalStorage)
    CancelAll()
};
