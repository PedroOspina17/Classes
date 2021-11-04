$(document).ready(function () {debugger
    if (localStorage.length != 0) {
        for (var i = 0; i < localStorage.length; i++) {
            var keyLogin = localStorage.key(i);
            if (keyLogin == 'Logueado') {
                for (var j = 0; j < localStorage.length; j++) {
                    //var keyAdmin = localStorage.key(i);
                    var valueAdmin = localStorage.getItem(Role);
                    if (valueAdmin != 'Admin') {
                        $('#ImagAdmin').hide();
                        break;
                    } else {
                        $("#ImagAdmin").show();
                        console.log('Pasó');
                        break;
                    }
                }
            } 
        }
    }else{
        window.location.href = "../../WebPages_FrontEnd/jQuery/01.logginStorage.html";
    }    
});
