// Task 1
function checkNumbers(firstNumber, secondNumber) {
    let result = 'Both numbers are positive or negative';

    if( firstNumber == 0 || secondNumber == 0) {
        result = 'At least one of the numbers is unsigned(0)';
    } else if (Math.sign(firstNumber) != Math.sign(secondNumber)) {
        result = 'One of the numbers is positive and the other one is negative';
    }

    console.log(result);
}

// Task 2
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkGuess() {
    let numberToGuess = getRandomNumber(1, 11);
    let userGuess = prompt("The number is between 1 and 10(inclusive). Your guess: ");
    let result = Number(userGuess) == numberToGuess ? 'Good Work' : 'Not matched';
    
    alert(result);
}

// Task 3
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

// Task 4
function modifyArray(arr, startPosition, steps) {
    let itemsToReverse = [];
    let endPosition = startPosition + steps;

    for(let i = startPosition; i <= endPosition; i++) {
        itemsToReverse.push(arr[i]);
    }
    
    itemsToReverse.reverse();

    let counter = 0;
    for(let j = startPosition; j <= endPosition; j++) {
        arr.splice(j, 1, itemsToReverse[counter++]);
    }

    console.log(arr);
}

// Task 5
function checkArray(arr) {
    let counterThirty = 0;
    let counterForty = 0;

    arr.forEach(element => {
        if(element == 30) {
            counterThirty++;
        } else if(element == 40) {
            counterForty++;
        }
    })

    if(counterThirty == 2 && counterForty == 2) {
        console.log("The array contains 30 and 40 twice");
    } else {
        console.log("The array doesn't contain 30 and 40 twice");
    }
}