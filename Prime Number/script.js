function checkPrime() {
    let num = 0;
    num = parseInt(document.getElementById("num-input").value);

    let result = document.getElementById("result");
    if (num < 2) {
        result.innerHTML = "Enter a number greater than or equals to 2"
    } else {
        let factor = num - 1;
        for (factor = num - 1; factor >= 2; factor--) {
            if (Number(num % factor) == 0) {
                result.innerHTML = num + " is a consonant number";
                return;
            } else {
                result.innerHTML = num + " is a prime number";
            }
        }
    }
}