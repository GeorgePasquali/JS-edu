//let myArr = [1, 7, 30, 88, 21, 40, 9, 46, 18, 40, 14, 30];

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