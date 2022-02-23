// When the result button is clicked
function showResult() {
    let firstNum = parseInt(document.getElementById("first-num").value);
    let secondNum = parseInt(document.getElementById("second-num").value);
    let operation = document.getElementById("operation").value;
    let result = "";

    switch (operation) {
        case "add":
            result = (parseInt(firstNum) + parseInt(secondNum)).toString();
            break;
        case "subtract":
            result = (parseInt(firstNum) - parseInt(secondNum)).toString();
            break;
        case "multiply":
            result = (parseInt(firstNum) * parseInt(secondNum)).toString();
            break;
        case "divide":
            result = (parseInt(firstNum) / parseInt(secondNum)).toString();
            break;
        default:
            result = "not found since a wrong selection was done."
    }

    document.getElementById("result").innerHTML = "The answer is " + result;
}

function showFullName() {
    let firstName = document.getElementById("first-name").value;
    let secondName = document.getElementById("second-name").value;

    document.getElementById("full-name-result").innerHTML = "Your Full Name is " + firstName + " " + secondName;
}