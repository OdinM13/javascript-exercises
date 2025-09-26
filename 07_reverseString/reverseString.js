const reverseString = function(string) {
    stringArr = [];
    stringLen = string.length;
    for (let i = 0; i <= stringLen; i++){
        stringArr.push(string[stringLen - i]);
    }
    return stringArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
