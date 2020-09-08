var Details = [];
var total = 0;
var revenew = 0;
var transactionType=0;
$(function () {
    transactionType = $("#TransactionType").val();
    loadDefaultValues()
    //var today = new Date();
    //$("#Date").val(today);
    

    GetProductList();
    
    
    
});

function loadDefaultValues() {
    toggleViewByTType();
    var now = new Date();
    var today = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0') + 'T' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    $('#Date').val(today);

    if (transactionType === "1") {
        $('#Observations').val("Customer: \nAddress: \nPhone: ");
    }
    
}

function toggleViewByTType()
{
    if (transactionType !== "1") {
        $(".onlySales").hide();
    }
}

function GetProductList() {
    console.log("Request started...");
    $.ajax({
        url: "https://localhost:44319/Products/GetAll?includeInactive=False",
        success: function (result) {
            console.log("Request success...");
            console.log(result);
            var Product = $("#Product");
            $.each(result, function (i, item) {
                Product.append(new Option(item.name, item.id));
            });
            GetProductDetail();

        }

    });
}

function GetProductDetail() {
    console.log("Request started...");
    var cod = document.getElementById("Product").value;
    $.ajax({
        url: "https://localhost:44319/Products/GetProductById/" + cod,
        success: function (result) {
            console.log("Request success...");
            console.log(result);
            $("#PriceList").text(formatMoney(result.priceList));
            $("#ExpectedIncomes").text(formatMoney(result.expectedRevenue));
            if (result.priceList > 0 && result.expectedRevenue > 0) {
                $("#FinalPrice").val(result.priceList + result.expectedRevenue);
                $("#Subtotal").text(result.priceList + result.expectedRevenue);
                updateSubTotal();
            }
        }
    });
}

function extractPrice(fieldId) {
    var result = $(fieldId).val();
    if (!result) {
        result = $(fieldId).text();
    }
    return parseInt(result.replace("$", "").replace(".", ""));
}
function updateExpectedRevenew() {
    var finalPrice = extractPrice("#FinalPrice");
    var priceList = extractPrice("#PriceList");
    if (priceList > 0 && finalPrice > 0) {
        $("#ExpectedIncomes").text(formatMoney(finalPrice - priceList));
    }
    updateSubTotal();
}

function updateSubTotal() {
    var finalPrice = extractPrice("#FinalPrice");
    var quantity = parseInt($("#Quantity").val());
    if (finalPrice > 0 && quantity > 0) {
        $("#Subtotal").text(formatMoney(finalPrice * quantity));
    }

}

function updateGranTotal() {
    var deliverValue = extractPrice("#DeliveryValue");
    var _total = extractPrice("#Total");
    if (deliverValue >= 0 && _total >= 0) {
        $("#GranTotal").text(formatMoney(deliverValue + _total));
    }

}

function AddDetail() {
    

    var detail = {
        productId: $("#Product").val(),
        productName: $("#Product option:selected").text(),
        sellPrice: $("#FinalPrice").val(),
        incomes: extractPrice("#ExpectedIncomes"),
        quantity: $("#Quantity").val(),
        subtotal: extractPrice("#Subtotal"),
        currentProductPrice: extractPrice("#PriceList")
    };
    console.log(detail);
    detail.totalRevenew = parseInt(detail.quantity) * parseInt(detail.incomes);

    if (!isValid(detail)) {
        return; // ToDo: Add toast with message to check errors.
    }

    addToTable(detail);

    revenew += parseInt(detail.totalRevenew);
    total += parseInt(detail.subtotal);
    $("#Total").text(formatMoney(total));
    $("#TotalIncomes").text(formatMoney(revenew));
    updateGranTotal();

    Details.push(detail);
    console.log(Details);
    clearForm();
}
function addToTable(detail) {
    var table = $("#TableBody");
    
    
    var row = document.createElement("tr");
    if (Details.length === 0) {
        $("#detailsTable").fadeIn();
    }
    //else {
    //    row.style = "display: none";
    //}
    

    var prodCol = document.createElement("td");
    prodCol.innerHTML = detail.productName;
    row.appendChild(prodCol);

    var quantityCol = document.createElement("td");
    quantityCol.innerHTML = detail.quantity;
    row.appendChild(quantityCol);

    var priceCol = document.createElement("td");
    priceCol.innerHTML = formatMoney(detail.sellPrice);
    row.appendChild(priceCol);

    var subtotalCol = document.createElement("td");
    subtotalCol.innerHTML = formatMoney(detail.subtotal);
    row.appendChild(subtotalCol);

    if (transactionType === "1") {
        var profitsCol = document.createElement("td");
        profitsCol.innerHTML = formatMoney(detail.totalRevenew);
        row.appendChild(profitsCol);    
    }
    

    var actionsCol = document.createElement("td");
    actionsCol.classList.add("btn-group");

    var btnModify = document.createElement("input");
    btnModify.type = "button";
    btnModify.onclick = function (e) {
        modifyRow(row, detail);
    };
    btnModify.classList.add("btn");
    btnModify.classList.add("btn-outline-warning");
    btnModify.value = "Modify";
    actionsCol.appendChild(btnModify);

    var btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.onclick = function (e) {
        deleteRow(row, detail);
    };
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-outline-danger");
    btnDelete.value = "Remove";
    actionsCol.appendChild(btnDelete);

   

    row.appendChild(actionsCol);

    table.append(row);
    //$(row).fadeIn();
    
}

function clearForm() {
    $("#FinalPrice").val("");
    $("#Quantity").val("1");
    $("#ExpectedIncomes").text("");
    $("#PriceList").text("");
    $("#Subtotal").text("");
    $("#Product").val("1");
    GetProductDetail();
}

function isValid(detail) {
    var result = true;
    $("#ErrorQuantity").text("");
    $("#ErrorFinalPrice").text("");

    if (getProductIndex(detail) >= 0) {
        alert("You cannot add this product, it is already added."); // ToDo: Change to toasts alerts
        result = false;
    }

    if (detail.quantity === "") {
        $("#ErrorQuantity").text("Quantity is required");
        result = false;

    }

    if (detail.sellPrice === "") {
        $("#ErrorFinalPrice").text("Final price is required");
        result = false;
    }

    return result;
}

function modifyRow(row, detail) {

    $("#FinalPrice").val(detail.sellPrice);
    $("#Quantity").val(detail.quantity);
    $("#ExpectedIncomes").text(formatMoney(detail.incomes));
    $("#PriceList").text(formatMoney(detail.currentProductPrice));
    $("#Subtotal").text(formatMoney(detail.subtotal));
    $("#Product").val(detail.productId);

    deleteRow(row, detail);
}

function deleteRow(row, detail) {
    Details.splice(getProductIndex(detail), 1);

    row = $(row);
    row.fadeTo(400, 0, function () {
        row.remove();
    });

    total -= detail.subtotal;
    revenew -= detail.totalRevenew;

    $("#Total").text(formatMoney(total));
    $("#TotalIncomes").text(formatMoney(revenew));
    updateGranTotal();
}

function getProductIndex(detail) {
    for (var i = 0; i < Details.length; i++) {
        if (Details[i].productId === detail.productId) {
            return i;
        }
    }
    return -1;
}

function saveChanges() {
    if (Details.length > 0) {
        var model = {
            date: $("#Date").val(),
            transactionType: $("#TransactionType").val(),
            observations: $("#Observations").val(),
            deliveryCost: extractPrice("#DeliveryValue"),
            sellerId: $("#SellerId").val(),
            subtotal: extractPrice("#Total"),
            total: extractPrice("#GranTotal"),
            details: Details
        };
        $.ajax({
            url: "https://localhost:44319/Transactions/Create",
            method: "POST",
            data: model,
            success: function(result) {
                console.log("Request success...");
                console.log(result);
                location.href = "https://localhost:44319/Transactions/Sales";
                //ToDo: Show toaster
            },
            error: function(result) {
                console.log(result);
                alert("Something unexpected have happened");
            }

        });
    } else {
        alert("You should add at least one product");
    }
}