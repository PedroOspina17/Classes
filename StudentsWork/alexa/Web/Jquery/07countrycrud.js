
  var datoscliente = [
    {
     "Id":2201,
     "Name":"Colombia",
     "LongName":"Colombias",
     "Description":"sur America",
     "PopulationAprox":15000,
     "Status":"Activo"
    },
    {
     "Id":2202,
     "Name":"Brasil",
     "LongName":"Brasils",
     "Description":"sur America",
     "PopulationAprox":150000,
     "Status":"inactivo"
    },
    {
    "Id":2203,
     "Name":"Peru",
     "LongName":"Perus",
     "Description":"sur America",
     "PopulationAprox":5000,
     "Status":"Activo"
    },
    {
     "Id":2204,
     "Name":"EEUU",
     "LongName":"EEUUS",
     "Description":"Norte America",
     "PopulationAprox":1500000,
     "Status":"Activo"
 
    }
 ];

  function tabla(){
    $.each(datoscliente, function(index,value){
    var insertarfila=`<tr row>
                <th>${value.Name}</th>
                <th>${value.Description}</th>
                <th>${value.Status}</th>
            </tr>`;
            $("#tabla").append(insertarfila)
            console.log(value.Name);
    });
  }

function validaciones(){
  var errorMsg="";
  var identificacion=($("#identificacion").val());
  var pais=$("#country").val();
  var paislargo=$("#countrydescripcion").val();
  var descripcionpais=$("#longcountrydescripcion").val();
 
  if(identificacion.trim() ==""){ 
    errorMsg += "el campo de cedula debe ingresarse \n";
    }
  if(parseInt(identificacion) < 0){ 
    errorMsg += "el numero de identificacion debe ser positivo\n" ;
    }
  if (pais.trim() ==""){
    errorMsg+= "el campo pais debe ingresarse\n";
      }
  if(pais.length >15){ 
    errorMsg += "el pais debe contener max 15 caracteres. \n";
    console.log(pais);
    }
  if (paislargo.leng >50){
    errorMsg+="el nombre del pais no debe contener mas de 50 caracteres.\n";
   }
  if(descripcionpais.length<10 && descripcionpais.length >50){
    errorMsg+="la descripcion del pais debe tener minimo 10 caracteres max 50.\n";
    } 
  if(errorMsg != ""){
  swal(errorMsg);
  }
}

function limpiarinformacion(){
  $("#identificacion").val("");
  toastr.error("cedula ha sido borrada.");
}







