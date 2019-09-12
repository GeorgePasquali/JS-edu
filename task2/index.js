function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkGuess() {
    let numberToGuess = getRandomNumber(1, 11);
    let userGuess = prompt("The number is between 1 and 10(inclusive). Your guess: ");
    let result = Number(userGuess) == numberToGuess ? 'Good Work' : 'Not matched';
    
    alert(result);
}