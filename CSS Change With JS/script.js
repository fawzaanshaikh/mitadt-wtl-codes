function changeSize() {
    document.getElementById("text").style.fontSize = "30px";
}

function changeBgColor() {
    let color = document.getElementById("bg-color").value;
    
    document.bgColor = color;
}

function magic() {
    let textColor = document.getElementById("text-color").value;
    let bgColor = document.getElementById("bg-color").value;

    if (textColor != bgColor) {
        document.getElementById("text").style.color = textColor;
    } else {
        document.bgColor = "white";
        document.getElementById("text").style.color = "black";
    }
}