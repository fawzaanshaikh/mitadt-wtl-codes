function changeSize() {
    document.getElementById("text").style.fontSize = "30px";
}

function changeBgColor() {
    let color = document.getElementById("color").value;

    switch (color) {
        case "red":
            document.bgColor = "Red";
            break;
        case "yellow":
            document.bgColor = "Yellow";
            break;
        case "blue":
            document.bgColor = "Blue";
            break;
        case "green":
            document.bgColor = "Green";
            break;
        case "white":
            document.bgColor = "White";
            break;
    }
}