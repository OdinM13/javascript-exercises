const fibonacci = function(n) {
    const number = Number(n);
    const conditionOne = 0;
    const conditionTwo = 1;
    
    if (number < 0){
        return "OOPS";
    } else if (number === conditionOne) {
        return conditionOne;
    } else if (number === conditionTwo) {
        return conditionTwo;
    } else {
        return fibonacci(number-1) + fibonacci(number-2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
