<<<<<<< HEAD
const getAge = (birth, death) => {
    if (!death) death = new Date().getFullYear();
    return death - birth;
};

const findTheOldest = function(array) {
    const sortedArray = array.sort((a, b) => {
        const lastAge = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextAge = getAge(b.yearOfBirth, b.yearOfDeath);
        return nextAge - lastAge; // Sorting descending (oldest first)
    });

    // You need to return the first object of the sorted array
    return sortedArray[0];
=======
const findTheOldest = function() {

>>>>>>> 24b1127a8f2575cfa120291c0efd01c298a924fc
};

// Do not edit below this line
module.exports = findTheOldest;
