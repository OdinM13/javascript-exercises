const contains = function(object, element) {
  for (const property in object) {
    // Object.is is used because it can handle "Nan"
    if (Object.is(object[property], element)) {
      return true;
    } else {
      if (typeof object[property] === 'object') {
        if (contains(object[property], element)) {
          return true;
        }
      } 
    } 
  } 
  return false;
};

// Do not edit below this line
module.exports = contains;
