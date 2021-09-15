var dataListJson = [
    {
      "guid": "70b5368f-045e-4341-b19a-61934c542fc7",
      "isActive": false,
      "balance": 407969.384,
      "name": "Abbott Donovan",
      "gender": "male",
      "company": "AUSTECH",
      "email": "abbottdonovan@austech.com",
      "phone": "+1 (832) 468-3150"
    },
    {
      "guid": "db0a2412-fe45-44e2-b194-7cb08c643ec4",
      "isActive": false,
      "balance": 602735.1047,
      "name": "Lacy Burton",
      "gender": "female",
      "company": "OCTOCORE",
      "email": "lacyburton@octocore.com",
      "phone": "+1 (951) 437-3199"
    },
    {
      "guid": "0955da39-b75f-41d1-aca1-ee454b9488cb",
      "isActive": false,
      "balance": 382015.0843,
      "name": "Maryanne Mason",
      "gender": "female",
      "company": "VENOFLEX",
      "email": "maryannemason@venoflex.com",
      "phone": "+1 (871) 438-2987"
    },
    {
      "guid": "6ef40da8-c88d-4329-a9d8-68de04fffc5e",
      "isActive": false,
      "balance": 826362.9778,
      "name": "Chandra Leonard",
      "gender": "female",
      "company": "SUREMAX",
      "email": "chandraleonard@suremax.com",
      "phone": "+1 (818) 425-3376"
    },
    {
      "guid": "0232de8c-ed5f-4f69-99f3-b1817e2f3735",
      "isActive": true,
      "balance": 655010.0303,
      "name": "Best Alston",
      "gender": "male",
      "company": "INTRADISK",
      "email": "bestalston@intradisk.com",
      "phone": "+1 (808) 401-2037"
    },
    {
      "guid": "84ba4853-fd76-492c-8f81-0496bc67f1bb",
      "isActive": false,
      "balance": 941351.5493,
      "name": "Salinas Michael",
      "gender": "male",
      "company": "SURELOGIC",
      "email": "salinasmichael@surelogic.com",
      "phone": "+1 (865) 564-2926"
    },
    {
      "guid": "2cb103ff-bb6a-408e-9647-719098c796d5",
      "isActive": false,
      "balance": 409196.2642,
      "name": "Marion Buckner",
      "gender": "female",
      "company": "TASMANIA",
      "email": "marionbuckner@tasmania.com",
      "phone": "+1 (859) 545-2967"
    },
    {
      "guid": "b478a396-b66b-442d-acbd-537728c07131",
      "isActive": false,
      "balance": 150764.0002,
      "name": "Bentley Wiggins",
      "gender": "male",
      "company": "EXPOSA",
      "email": "bentleywiggins@exposa.com",
      "phone": "+1 (944) 586-3426"
    },
    {
      "guid": "8a857810-f12b-4965-ae77-4070ab6e78c8",
      "isActive": true,
      "balance": 188898.1451,
      "name": "Baldwin White",
      "gender": "male",
      "company": "ROUGHIES",
      "email": "baldwinwhite@roughies.com",
      "phone": "+1 (967) 573-3900"
    },
    {
      "guid": "2893859a-f6ef-49a7-b899-69fe432f0519",
      "isActive": true,
      "balance": 242355.9894,
      "name": "Holder Taylor",
      "gender": "male",
      "company": "EXOVENT",
      "email": "holdertaylor@exovent.com",
      "phone": "+1 (932) 484-2376"
    }
  ];

$(document).ready(function() {
    $('#example2').DataTable({
      data: dataListJson,
      columns: [
          {title:"Name", data: "name"},
          {title:"Gender",data: "gender"},
          {title:"Company",data: "company"},
          {title:"Status",data: "isActive", render: function(data){
                  //Any transformation you may want.
                  if(data == true)
                  { 
                    return "Active"
                  }
                  else
                  {
                    return "Inactive"
                  }
              }
          },
          {title: "Balance", data: "balance", render: function(data){
              return "$ " + data
            }
          },
          {title: "Actions", data:"name", render: function(name){
            return `
              <div class="btn-group d-flex m-auto w-50">
                <input type="button" value="Create" class="btn btn-success" onclick="testFunction('${name}')">
                <input type="button" value="Clear all" class="btn btn-danger" onclick="testFunction('${name}')">
              </div>
            `
          }
        }
      ]
    })
} );

function testFunction(id){
  alert("calling with name " + id);
}