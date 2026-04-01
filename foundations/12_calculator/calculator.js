const add = function(x, y) {
    return x + y;	
};

const subtract = function(x, y) {
    return x - y;	
};

const sum = function(x) {
    if (x.length < 1) {
        return 0;
    } else {
    return x.reduce((total, value) => total + value);
    }
};

const multiply = function(x) {
    if (x.length < 2) {
        return 0;
    } else {
    return x.reduce((total, value) => total * value);
    }
};

const power = function(x, y) {
    return x ** y;	
};

const factorial = function(x) {
    let sum = x;
    if (x < 2) {
        return 1;
    } else {
        while (x > 1) {
            sum = sum * (x - 1);
            x--;
        }
    return sum;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
