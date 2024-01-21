const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(number) {
  return number.reduce((count, element) => count * element, 1);
};

const power = function(num1, num2) {
  return (num1 ** num2);
};

const factorial = function(number) {
  let result;
  if(number === 0 || number === 1){
    return 1;
  } else {
    result = number * factorial(number - 1);
  }

  return result;
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
