<<<<<<< HEAD
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
=======
const add = function() {
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
>>>>>>> 24b1127a8f2575cfa120291c0efd01c298a924fc
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
