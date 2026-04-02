const factorial = function(n) {
  if (n < 0 || typeof n === "string" || n % 1 !== 0 || typeof n === "object") {
    return undefined;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
};

// Do not edit below this line
module.exports = factorial;
