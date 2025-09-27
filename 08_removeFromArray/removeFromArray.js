const removeFromArray = function(array, removeElement, ...moreElements) {
    // if (arguments.length !== 2) return "ERROR!";
    if (moreElements.length === 0){
        // const found = array.findIndex((element) => element === removeElement);
        //console.log(found);
        // const removed = array.splice(found, 1);
        // return array;
        array = removeSimple(array, removeElement);
    } else {
        for (let i = 0; i < moreElements.length; i++) {
            const found = array.findIndex((element) => element === moreElements[i]);
            //console.log(found);
            const removed = array.splice(found, 1);
            // return array;
            array = removeSimple(array, removeElement);
        }
    }
    return array;
};

function removeSimple(array, simpleElement) {
        const found = array.findIndex((element) => element === simpleElement);
        //console.log(found);
        const removed = array.splice(found, 1);
        return array;
}
console.log(removeFromArray([1, 2, 2, 3], 2));

// Do not edit below this line
module.exports = removeFromArray;
