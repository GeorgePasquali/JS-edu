// Task 1
function checkNumbers(firstNumber, secondNumber) {
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
let page = {
    div: document.getElementById("page"),
    inputsDiv: document.getElementById("inputs"),
    resultDiv: document.getElementById("page"),
    form: undefined,
    inputFieldsArray: [],
    labelCounter: 0,
    calculateButton: undefined,
    h3: undefined,

    createForm: function() {
        if(document.body.contains(this.div)) {
            if(!this.div.contains(this.form)) {
                this.form = document.createElement("form");
                this.div.appendChild(this.form);
                console.log("Form created!");
            }
        }
    },

    createLabel: function(labelText) {
        let label = document.createElement("label");
        label.textContent = String(labelText);
        return label;
    },

    createInputField: function() {
        let inputField = document.createElement("input");
        inputField.setAttribute("type", "number");
        this.inputFieldsArray.push(inputField);
        return inputField;
    },

    addLabelsAndFields: function(fieldsNumber) {
        if(!isValidNumber(fieldsNumber)) {
            console.log("Please enter a valid number as parameter");
            return;
        }

        let fragment = document.createDocumentFragment();

        if(this.div.contains(this.form)) {
            for(let i = 0; i < fieldsNumber; i++) {
                this.labelCounter++;
                let labelText = "Number to multiply " + this.labelCounter + ": ";
    
                let label = this.createLabel(labelText);
                let inputField = this.createInputField();

                fragment.appendChild(inputField);
                fragment.insertBefore(label, inputField);
                fragment.appendChild(document.createElement("br"));
            }

            this.inputsDiv.appendChild(fragment);
        } else {
            console.log("You need to create the form first");
        }
    },

    createButton: function() {
        this.calculateButton = document.createElement("input");
        this.calculateButton.setAttribute("type", "button");
        this.calculateButton.setAttribute("value", "Calculate");
        this.calculateButton.addEventListener("click", this.calculateMultiplication.bind(this));
        console.log("Button created!");
    },

    addButton: function() {
        if(this.div.contains(this.form) && this.inputFieldsArray.length > 0) {
            if(!this.form.contains(this.calculateButton)) {
                this.createButton();
                this.form.appendChild(this.calculateButton);
            }
        } else {
            console.log("You need to create the form and the input fields first");
        }
    },

    calculateMultiplication: function() {
        console.log(this);
        let areValiudNumbers = this.inputFieldsArray.every((element) => {
            let elementValue = Number(element.value);

            if(elementValue == "" || !isValidNumber(elementValue)) {
                return false;
            }

            return true;
        });

        if(!areValiudNumbers) {
            alert("Please enter valid numbers");
            return;
        }

        let result = this.inputFieldsArray.reduce((res, elem) => {
            return res * elem.value;
        }, 1);

        this.resultDiv = document.getElementById("results");

        if(!this.resultDiv.contains(this.h3)) {
            this.h3 = document.createElement("h3");
            this.h3.textContent = String(result);
            this.resultDiv.appendChild(this.h3);
        } else {
            this.h3.textContent = String(result);
        }
    }  
};

// Task 4
function isValidNumber(param) {
    if((typeof param != 'number') || !(isFinite(param)) || param == null) {
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

    if(!isArrayOfNumbers(arr)) {
        console.log("All elements in the array must be valid numbers");
        return;
    }

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
function isArrayOfNumbers(arr) {
    if(!Array.isArray(arr)) {
        console.log("Please provide an array as parameter - isArrayOfNumbers");
        return;
    }

    let valid = arr.every((element) => {
        if(!isValidNumber(element)) {
            return false;
        }

        return true;
    });

    return valid;
}

function checkArray(arr) {

    if(!Array.isArray(arr)) {
        console.log("Please provide an array as parameter");
        return;
    }

    if(!isArrayOfNumbers(arr)) {
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