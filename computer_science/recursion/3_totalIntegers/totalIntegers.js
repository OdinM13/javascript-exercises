const totalIntegers = function(object, count = 0) {
  if (typeof object !== 'object') {
    return undefined;
  }
  for (const property in object) {
    if (Number.isInteger(object[property])) {
      count += 1;
    }
    if (typeof object[property] === 'object') {
      count = totalIntegers(object[property], count);
    }
  } 
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
