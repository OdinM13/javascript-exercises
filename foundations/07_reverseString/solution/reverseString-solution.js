const reverseString = function (string) {
  return string.split("").reverse().join("");
};

module.exports = reverseString;
<<<<<<< HEAD
=======



// Another approach could be to loop over the string in reverse direction to construct a new one
/*
  const reverseString = function (string) {
    let reversedString = "";

    for (let i = string.length -1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  };
*/ 
>>>>>>> 24b1127a8f2575cfa120291c0efd01c298a924fc
