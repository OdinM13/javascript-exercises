<<<<<<< HEAD
const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 != 0) {
        return true;
    } 
    if (year % 4 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
=======
const leapYears = function() {
>>>>>>> 24b1127a8f2575cfa120291c0efd01c298a924fc

};

// Do not edit below this line
module.exports = leapYears;
