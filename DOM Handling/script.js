function showTable() {
    var divTable = document.getElementById("div-table");
    var tr = document.createElement("tr");
    divTable.appendChild(tr);

    var td1 = document.createElement("td");
    td1.innerHTML = "Data 1 in row 1";
    var td2 = document.createElement("td");
    td2.innerHTML = "Data 2 in row 1";
    var td3 = document.createElement("td");
    td3.innerHTML = "Data 3 in row 1";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
}

function showRbText(element) {
    let text = element.value;
    document.getElementById("rb-output").innerHTML = text + " was selected.";
}