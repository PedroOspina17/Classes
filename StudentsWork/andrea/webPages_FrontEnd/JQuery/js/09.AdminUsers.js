$(document).ready(load);

function load() {
    //debugger;
    $.ajax({
        url: "http://3.14.144.130/GetUsers",
        type: "GET",
        success: function(response) {
            //debugger;
            if (response.users.length > 0) {
                $("#users").DataTable({
                    data: response.users,
                    columns: [
                        { title: "NOMBRE", data: "name" },
                        { title: "APELLIDO", data: "lastName" },
                        { title: "EDAD", data: "age" }
                    ]

                })
            }

        },
        error: function(response) {

        }

    });
}