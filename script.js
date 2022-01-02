const allClear = document.querySelector(".all-clear");

const add = (one, two) => {
  return one + two;
};

const subtract = (one, two) => {
  return one - two;
};

const multiply = (one, two) => {
  return one * two;
};

const divide = (one, two) => {
  return one / two;
};

const operate = (operator, numOne, numTwo) => {
  if (operator === "+") {
    return add(numOne, numTwo);
  } else if (operator == "-") {
    return subtract(numOne, numTwo);
  } else if (operator == "*") {
    return multiply(numOne, numTwo);
  } else if (operator == "/") {
    return divide(numOne, numTwo);
  }
};