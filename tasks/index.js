function display() {
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);

    if (secondNumber != 0) {
        console.log(firstNumber / secondNumber);
        console.log(firstNumber * secondNumber);
    } else {
        console.log("Cannot divide by 0!");
    }
}

let calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", display);