export const checkInputs = function (inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].trim().length == 0) {
            alert("Please fill the form!");
            return false;
        }
    }

    return true;
}