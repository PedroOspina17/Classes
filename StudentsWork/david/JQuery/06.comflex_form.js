$(document).ready(function(){
    
    console.log("entro1")
    $("#CreateMoreInformation").hide()
});


function CreateInformation(){
    console.log("entro")
    $("#CreateMoreInformation").show("slow")

}

function Add(){
    var knowledgeList = $("[Name=Knowledge]:checked");
    var Comparar = $("[Name=OpenPosition]:checked").val();
    var Sum = 0;
    var Comparar = 0;

    $.each(knowledgeList, function(index, value){
        Sum += parseInt( $(value).val());
        console.log(Sum);
        
    });

    
    console.log(Sum);
    console.log(Comparar);

    if (Sum>=Comparar){
        swal("CONGRATULATION","YOU GOT THE WORK","success")

    };
   
}