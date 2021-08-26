var modificar = false
var datoscliente = [
  {
    "Id": 2201,
    "Name": "Colombia",
    "LongName": "Colombias",
    "Description": "sur America",
    "PopulationAprox": 15000,
    "Status": "Activo"
  },
  {
    "Id": 2202,
    "Name": "Brasil",
    "LongName": "Brasils",
    "Description": "sur America",
    "PopulationAprox": 150000,
    "Status": "inactivo"
  },
  {
    "Id": 2203,
    "Name": "Peru",
    "LongName": "Perus",
    "Description": "sur America",
    "PopulationAprox": 5000,
    "Status": "Activo"
  },
  {
    "Id": 2204,
    "Name": "EEUU",
    "LongName": "EEUUS",
    "Description": "Norte America",
    "PopulationAprox": 1500000,
    "Status": "Activo"

  }
];

function tabla() {
  $.each(datoscliente, function (index, value) {
    var insertarfila = `<tr id="ROW_${value.Id}">
                <td>${value.Name}</td>
                <td>${value.Description}</td>
                <td>${value.Status}</td>
                <td class="btn-group">
                        <input type="button" class="btn btn-outline-warning"id="(${value.Id})" value="Modify" onclick="modify(${value.Id})">
                        <input type="button" class="btn btn-outline-danger" id="(${value.Id})"value="Remove" onclick="remove(${value.Id})">
                    </td> 
            </tr>`;
    $("#tabla").append(insertarfila)
    console.log(value.Name);
  });
}

function guardar() {
  //debugger;
  var errorMsg = "";
  var identificacion = ($("#identificacion").val());
  var pais = $("#Name").val();
  var paislargo = $("#LongName").val();
  var descripcionpais = $("#countrydescripcion").val();
  var paprox = $("#PopulationAprox").val();
  var status = $("input[name='Status']:checked").val();

  if 

  if (identificacion.trim() == "") {
    errorMsg += "el campo de cedula debe ingresarse \n";
  }
  if (parseInt(identificacion) < 0) {
    errorMsg += "el numero de identificacion debe ser positivo\n";
  }
  if (pais.trim() == "") {
    errorMsg += "el campo pais debe ingresarse\n";
  }
  if (pais.length > 15) {
    errorMsg += "el nombre del pais  debe contener max 15 caracteres. \n";
  }
  if (paislargo.length > 50) {
    errorMsg += "el nombre del pais no debe contener mas de 50 caracteres.\n";
  }
  if (descripcionpais.length >= 1 && descripcionpais.length < 10 || descripcionpais.length > 50) {
    errorMsg += "la descripcion del pais debe tener minimo 10 caracteres max 50.\n";

  }
  if (paprox < 0 && paprox > 20) {
    errorMsg += "ingrese la poblacion aproximada de su pais .\n";
  }
  if (errorMsg != "") {
    swal(errorMsg);
  }
  else {
    inserttabla(parseInt(identificacion), pais, paislargo, descripcionpais, paprox, status)

  }
  if (modificar == true) {
    remove(identificacion)
    inserttabla(parseInt(identificacion), pais, paislargo, descripcionpais, paprox, status)
    cancelar()
  }
}


function inserttabla(identificacion, pais, paislargo, descripcionpais, paprox, status,) {
  var insertartabla1 = `<tr>
  <td>${pais}</td>
  <td>${descripcionpais}</td>
  <td>${status}</td>
  <td class="btn-group">
            <input type="button" class="btn btn-outline-warning" value="Modify">
            <input type="button" class="btn btn-outline-danger" value="Remove">
        </td>
  </tr>`;
  $("#tabla").append(insertartabla1);
  console.log(insertartabla1)
  var yeison = {
    "Id": parseInt(identificacion),
    "Name": pais,
    "LongName": paislargo,
    "Description": descripcionpais,
    "PopulationAprox": parseInt(paprox),
    "Status": status
  }
  datoscliente.push(yeison)//push ingresar una informacion al yeison
}

function cancelar() {
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

function remove(Id) {
  var indextodelete = -1;
  $.each(datoscliente, function (index, value) {
    console.log(value);
    if (value.Id == Id) {
      indextodelete = index;
    }
  });

  if (indextodelete != -1) {
    $("#ROW_" + Id).remove();
    datoscliente.splice(indextodelete, 1);//eliminar de una lista
    toastr.success(`el elemento ${indextodelete} ha sido eliminado`);
    console.log(datoscliente)
  }
}
function modify(Id) {
  modificar = true
  var indexremover = -1;

  $.each(datoscliente, function (index, value) {//debugger;
    console.log(value)
    if (value.Id == Id) {
      indexremover = index;
      console.log(indexremover)
      console.log(value.Name, value.Description, value.Status);

      $("#identificacion").val(value.Id);
      $("#Name").val(value.Name);
      $("#LongName").val(value.LongName);
      $("#countrydescripcion").val(value.Description);
      $("#PopulationAprox").val(value.PopulationAprox);
      if (value.Status == "Activo") {
        $("#statusactivo").prop("checked", true);
      }
      else {
        ($("#statusinactivo").prop("checked", true));
      }
    }

  });
}







