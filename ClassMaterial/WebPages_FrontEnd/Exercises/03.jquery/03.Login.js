function login(){

    $.ajax({
        url:"http://localhost:80/SingIn",
        type:"POST",
        data: JSON.stringify( {"userName": $("#inputEmail").val(), "password": $("#inputPass").val()}),
        success: function(response){
            if(response.result == true){
                window.location.href = "";
                toastr.success("User verified.!!")
                localStorage.setItem("security",response.user)

            }
            else{
                toastr.warning("Username or pass is nor correct.!!")

            }
        },
        error: function(){
            toastr.error("An error was thrown.!!")

        }
    });
    toastr.info("Your identification is being verified...");
}