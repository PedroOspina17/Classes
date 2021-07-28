
function datoscliente(){
    console.log(datoscliente);
    var usuario = $("#usuario").val(); 
    var nombreusuario =  $("#nombreusuario").val(); 
    var edad = $("#edad").val(); 
    var tdocumento= $("#tipodedocumento option:checked").val();
    var tdocumentt=$("#tipodedocumento option:checked").text();
    var genero= $("input[name='genero']:checked").val();
    var generot= $("input[name='genero']:checked").attr("descripcion");
    var tdprograma = $('input[name="tipodeprograma"]:checked');
    var tprograma = "";
    $.each(tdprograma, function(index, value) {

        console.log(value);
        //tprograma += $(value).attr("id") + "\n";
        tprograma += $(value).text(); + "\n";
     });

    var datos=`usuario: ${usuario} \nnombre usuario ${nombreusuario}\nedad ${edad} \ndocumento: ${tdocumentt}(${tdocumento})\ngenero:${generot}\ntipo de programa:${tprograma}`;
    $("#infocliente").val(datos); 
     }


     