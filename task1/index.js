function checkNumbers(firstNumber, secondNumber) {
    let result = 'Both numbers are positive or negative';

    if( firstNumber == 0 || secondNumber == 0) {
        result = 'At least one of the numbers is unsigned(0)';
    } else if (Math.sign(firstNumber) != Math.sign(secondNumber)) {
        result = 'One of the numbers is positive and the other one is negative';
    }

    console.log(result);
}