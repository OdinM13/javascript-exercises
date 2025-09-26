const repeatString = function(string, number) {
    let stringArr = [];
    for (let i = 0; i < number; i++){
        stringArr.push(string);
    }
    return stringArr.join("");
};

// Do not edit below this line
module.exports = repeatString;
