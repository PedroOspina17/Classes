$(document).ready(function() {
    for (var i = 0; i < localStorage.length; i++) {
        var keyLogin = localStorage.key(i);
        var valueLogin = localStorage.getItem(keyLogin);
        if (valueLogin != 'Admin') {
            $('#ImagAdmin').hide();
            break;
        }else{
            $("#ImagAdmin").show();
            console.log('Pasó');
            break;
        }
    }
});
