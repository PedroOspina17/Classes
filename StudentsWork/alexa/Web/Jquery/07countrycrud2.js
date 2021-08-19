//funciones reutilizables //
function cancelar() {//eliminar informacion de alguna parte y colocarla en o//
    $("#identificacion").val("");
    toastr.success("cedula ha sido borrada.");
    $("#Name").val("");
    toastr.error("La ciudad ha sido borrada");
    $("#LongName").val("");
    toastr.info("La informacion Adicional de la ciudad ha sido borrada");
    $("#countrydescripcion").val("");
    toastr.error("La descripcion ha sido borrada");
    $("#PopulationAprox").val("");
    toastr.success("La poblacion ha sido borrada");
  }

  //funcion eliminar fila haya el index y lo elimina de la lista//
  
function remove(Id) {
    var indextodelete = -1;
    $.each(datoscliente, function (index, value) {
      console.log(value);
      if (value.Id == Id) {
        indextodelete = index;
      }
    });
    
    if (indextodelete != -1){
    $("#ROW_"+ Id).remove();
    datoscliente.splice(indextodelete, 1);//eliminar de una lista
    toastr.success(`el elemento ${indextodelete} ha sido eliminado`);
    console.log(datoscliente)
    }
}
//    insertar una tabla //

function tabla() {
    $.each(datoscliente, function (index, value) {
      var insertarfila = `<tr id="ROW_${value.Id}">
                  <td>${value.Name}</td>
                  <td>${value.Description}</td>
                  <td>${value.Status}</td>
                  <td class="btn-group">
                          <input type="button" class="btn btn-outline-warning"id="btnmodify_77" value="Modify" onclick="modify(${value.Id})">
                          <input type="button" class="btn btn-outline-danger" id="btnremove_77"value="Remove" onclick="remove(${value.Id})">
                      </td> 
              </tr>`;
      $("#tabla").append(insertarfila)
      console.log(value.Name);
    });
  }