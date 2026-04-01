<<<<<<< HEAD
const removeFromArray = function(array, ...elementsToRemove) {
    // We create a new array that only contains items 
    // that are NOT included in the 'elementsToRemove' list
    return array.filter(item => !elementsToRemove.includes(item));
};

console.log(removeFromArray([1, 2, 2, 3], 2));

=======
const removeFromArray = function() {
};

>>>>>>> 24b1127a8f2575cfa120291c0efd01c298a924fc
// Do not edit below this line
module.exports = removeFromArray;
