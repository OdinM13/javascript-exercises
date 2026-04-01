const palindromes = function (string) {
    const regex = /[ ?.!,]/g; 
    const shortString = string.replaceAll(regex, '').toLowerCase();;
    const stringArray = shortString.split('');
    const arrayLength = stringArray.length;
    const lengthRoundedDown = Math.floor(arrayLength);
    let tracking = 0;

    for (let i = 0; i <= lengthRoundedDown; i++) {
        if (stringArray[i] === stringArray[arrayLength - 1 - i]) {
            tracking += 0;
        } else {
            tracking += 1;
        }
    }

    // console.log(shortString);
    // console.log(stringArray);
    // console.log(arrayLength);
    // console.log(lengthRoundedDown);

    if (tracking === 0){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
