// Function to show the table
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

// Function to show the radio button text
function showRbText(element) {
    let text = element.value;
    document.getElementById("rb-output").innerHTML = text + " was selected.";
}

// Global variable of button in order to listen to its event
var addButton = document.createElement("button");
addButton.innerHTML = "Click the new button"
addButton.addEventListener("click", function() {
    alert("The new button was clicked.");
})
// Function to show the button
function showButton() {
    var divButtonShow = document.getElementById("div-button-show");
    divButtonShow.appendChild(addButton);
}