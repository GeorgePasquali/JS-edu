// Task 1
function checkNumbers(firstNumber, secondNumber) {

    console.log(firstNumber);
    console.log(secondNumber);

    if(!isValidNumber(firstNumber) || !isValidNumber(secondNumber)) {
        console.log("Please provide 2 numbers");
        return;
    }

    let result = 'Both numbers are positive or negative';

    if(firstNumber == 0 || secondNumber == 0) {
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
    let userGuess = Number(prompt("The number is between 1 and 10(inclusive). Your guess: "));

    if(!isValidNumber(userGuess)) {
        alert("Please enter a number");
        return;
    }

    let result = userGuess == numberToGuess ? 'Good Work' : 'Not matched';
    
    alert(result);
}

// Task 3
let div = document.getElementById("page");
let form = null;
let inputFieldsArray = [];
let calculateButton = null;
let resultDiv = null;
let h3 = null;
let fragment = document.createDocumentFragment();

let page = {
    createForm: function() {
        if(!div.contains(form)) {
            form = document.createElement("form");
            div.appendChild(form);
            console.log("Form created!");
        }
    },

    createInputField: function(fieldsNumber) {
        if(!isValidNumber(fieldsNumber)) {
            console.log("Please enter a valid number as parameter");
            return;
        }

       for(let i = 0; i < fieldsNumber; i++) {
            let inputField = document.createElement("input");
            inputField.setAttribute("type", "number");
            inputField.setAttribute("placeholder", "Please enter a number");
            inputFieldsArray.push(inputField);
            console.log("Input field created!");

            if(!form.contains(calculateButton)) {
                form.appendChild(inputField);
                form.appendChild(document.createElement("br"));
           } else {
                form.insertBefore(inputField, calculateButton);
                form.insertBefore(document.createElement("br"), calculateButton);
           }
       }
    },

    createButton: function() {
       if(!form.contains(calculateButton)) {
        calculateButton = document.createElement("input");
        calculateButton.setAttribute("type", "button");
        calculateButton.setAttribute("value", "Calculate");
        calculateButton.addEventListener("click", this.calculateMultiplication);
        form.appendChild(calculateButton);
        console.log("Button created!");
       }
    },

    calculateMultiplication: function() {
        let result = inputFieldsArray.reduce((res, elem) => {
            return res * elem.value;
        }, 1);

        resultDiv = document.getElementById("results");
        if(!resultDiv.contains(h3)) {
            h3 = document.createElement("h3");
            h3.innerHTML = String(result);
            resultDiv.appendChild(h3);
            console.log("h3 created!");
        } else {
            h3.innerHTML = String(result);
        }
    }
};

// Task 4
function isValidNumber(param) {
    if((typeof param != 'number') || !(isFinite(param))) {
        return false;
    }

    return true;
}

function modifyArray(arr, startPosition, steps) {

    if(!Array.isArray(arr)) {
        console.log("Please provide an array as parameter");
        return;
    }

    if(!isValidNumber(startPosition) || (startPosition < 0) || startPosition > (arr.length - 1)) {
        console.log("Please provide a valid starting position");
        return;
    }

    let endPosition = startPosition + steps;
    let possibleSteps = (arr.length - 1) - startPosition;

    if(!isValidNumber(steps) || steps < 0 || steps > possibleSteps) {
        console.log("Please provide a valid number of steps");
        return;
    }

    console.log(possibleSteps);

    let itemsToReverse = [];
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

    if(!Array.isArray(arr)) {
        console.log("Please provide an array as parameter");
        return;
    }

    let isArrayOfNumbers = arr.every((element) => {
        if((typeof element != 'number') || !(isFinite(element))) {
            return false;
        }

        return true;
    });

    if(!isArrayOfNumbers) {
        console.log("All elements in the array must be valid numbers");
        return;
    }

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