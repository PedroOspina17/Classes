function CrearVariableGlobal(){
  
        var listaJson = [
            {
                "Id" : 2201,
                "Name" : "Colombia",
                "LongName" : "Colombia's long Name",
                "Description" : "South-american country",
                "Population" : 15.000,
                "Status" : "Active"
            },
            {
                "Id" : 2202,
                "Name" : "Brasil",
                "LongName" : "Brasil's long Name",
                "Description" : "South-american country",
                "Population" : 150.000,
                "Status" : "Inactive"
            },
        ]
        $.each(listaJson,function(index, value){
            console.log(listaJson[index].Name)
        });
}