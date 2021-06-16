function validardatos(){
    var val1=$("#inputEmail").val();
    var val2=$("#inputEmail2").val();
    if (val1=="pasword1" & val2=="123") {
    window.location.href="ingresopagina.html";
    }
    else {
    swal("pasword y clave errada")
    }
}

