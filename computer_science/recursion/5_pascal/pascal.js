const pascal = function(int) {
  const output = [];

  const generate = (n, k) => {
    if (k === n || k === 0) {
      return 1;
    }
    return generate(n - 1, k - 1) + generate (n - 1, k);
  }

  for (let i = 0; i < int; i++) {
    if (i === 0 || i === int - 1) {
      output.push(1);
    } else {
      output.push(generate(int - 1, i));
    }
  }
  
  return output;
};


// Do not edit below this line
module.exports = pascal;
