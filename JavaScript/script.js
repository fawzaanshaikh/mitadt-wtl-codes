// When the result button is clicked
function showResult() {
    let firstNum = parseInt(document.getElementById("first-num").value);
    let secondNum = parseInt(document.getElementById("second-num").value);
    let operation = document.getElementById("operation").value;
    let result = "";

    switch (operation) {
        case "add":
            result = (parseInt(firstNum) + parseInt(secondNum)).toString();
    }

    document.getElementById("result").innerHTML = "The answer is " + result;
}