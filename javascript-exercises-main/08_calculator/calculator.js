const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	let num = 0;
  for (let i = 0; i < arr.length; i ++){
    num += arr[i];
  }
  return num;
};

const multiply = function(arr) {
  let num = 1;
  for (let i = 0; i < arr.length; i ++){
    num *= arr[i];
  }
  return num;
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x) {
	if (x <= 1){
    return 1;
  }
  return factorial(x - 1) * x
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
