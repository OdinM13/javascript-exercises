const sumAll = function(arg1, arg2) {
    // 1. Check if numbers are negative or not numbers -> return "ERROR"
    if (
        arg1 < 0 || arg2 < 0 || 
        typeof arg1 !== 'number' || typeof arg2 !== 'number' ||
        !Number.isInteger(arg1) || !Number.isInteger(arg2)
    ) {
        return "ERROR";
    }

    // 2. Make sure you know which one is the actual 'start' and 'end'
    const minNum = Math.min(arg1, arg2);
    const maxNum = Math.max(arg1, arg2);
    // 3. Your logic (Loop or Array+Reduce)
    const sortedArr = range(minNum, maxNum+1, 1)
    // 4. Return the final sum
    const addedNum = sortedArr.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);
    return addedNum;
};

const range = (start, stop, step) =>
    Array.from(
        { length: Math.ceil((stop - start) / step) },
        (_, i) => start + i * step,
    );

// Do not edit below this line
module.exports = sumAll;
