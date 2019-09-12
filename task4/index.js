//let myArr = [1, 7, 30, 88, 21, 40, 9, 46, 18, 40, 14, 30];

function modifyArray(arr, startPosition, steps) {
    let itemsToReverse = [];
    let endPosition = startPosition + steps;

    for(let i = startPosition; i < endPosition; i++) {
        itemsToReverse.push(myArr[i]);
    }
    
    itemsToReverse.reverse();

    let counter = 0;
    for(let j = startPosition; j < endPosition; j++) {
        arr.splice(j, 1, itemsToReverse[counter++]);
    }

    console.log(arr);
}