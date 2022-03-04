function numPalindrome() {
    let num = parseInt(document.getElementById("num").value);
    let reverse = 0;
    let numCopy = num;

    let rem = 0;
    while (num != 0) {
        rem = parseInt(num % 10);
        reverse = parseInt(reverse * 10 + rem);
        num = parseInt(num / 10); 
    }

    if (reverse == numCopy) {
        document.getElementById("num-result").innerHTML = numCopy + " is a palindrome";
    } else {
        document.getElementById("num-result").innerHTML = numCopy + " is not a palindrome";
    }
}

function textPalindrome() {
    let text = document.getElementById("text").value;
    let reverse = text.split("").reverse().join("");

    if (text === reverse) {
        document.getElementById("text-result").innerHTML = text + " is a palindrome";
    } else {
        document.getElementById("text-result").innerHTML = text + " is not a palindrome";
    }
}