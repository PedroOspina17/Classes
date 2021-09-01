var contador = 0;
function deleteKey(Key) {
    localStorage.removeItem(Key);
    $("#"+Key).remove()
}

function Validation() {
    var Key = $("#Key").val();
    var KeyIndexOf = Key.indexOf(" ");
    var Value = $("#Value").val();
    if (Key.length == 0 || KeyIndexOf != -1) {
        swal("SORRY", "The key can't be null or can't have a space", "error");
    }
    if (Value.length > 250 || Value.length == 0) {
        swal("SORRY", "The value can't be null or can't have cero characters", "error");
    }
    localStorage.setItem(Key, Value);

    var code =
        `<div id="${Key}">
            <dt class="pt-3">${Key}</dt>
            <dl class="input-group">
                <dl>${Value}</dl>
                <div class="ml-4">
                    <input class="btn btn-outline-danger" type="button" value="Delete" onclick="deleteKey('${Key}')">
                </div>
            </dl>
        </div>`;
    $("#Guardar").append(code)
}

function EliminateLS() {
    localStorage.clear()
}