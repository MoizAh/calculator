// Referencing Elements
const display = document.querySelector(".display");
const displayText = document.querySelector(".display-text");
const allClear = document.querySelector(".all-clear");
const clear = document.querySelector(".clear");
const division = document.querySelector(".division");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiplication = document.querySelector(".multiplication");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const subtraction = document.querySelector(".subtraction");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const addition = document.querySelector(".addition");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");

// Basic Math Operators
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

// Operate Function
const operate = (operator, numOne, numTwo) => {
  if (operator == "+") {
    return add(numOne, numTwo);
  } else if (operator == "-") {
    return subtract(numOne, numTwo);
  } else if (operator == "*") {
    return multiply(numOne, numTwo);
  } else if (operator == "/") {
    return divide(numOne, numTwo);
  }
};

// Event Listeners for to calculate and display results
let num = [];
let firstValue;
let secondValue;
let operation = [];

allClear.addEventListener("click", () => {
  location.reload();
  displayText.textContent = "0";
});
clear.addEventListener("click", () => {
  num.pop();
  displayText.textContent = +num.join("");
});
division.addEventListener("click", () => {
  displayText.textContent = "/";
  operation.push(displayText.textContent);
  numOne();
  multiOperate();
  num = [];
});
seven.addEventListener("click", () => {
  displayText.textContent = 7;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
eight.addEventListener("click", () => {
  displayText.textContent = 8;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
nine.addEventListener("click", () => {
  displayText.textContent = 9;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
multiplication.addEventListener("click", () => {
  displayText.textContent = "*";
  operation.push(displayText.textContent);
  numOne();
  multiOperate();
  num = [];
});
four.addEventListener("click", () => {
  displayText.textContent = 4;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
five.addEventListener("click", () => {
  displayText.textContent = 5;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
six.addEventListener("click", () => {
  displayText.textContent = 6;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
subtraction.addEventListener("click", () => {
  displayText.textContent = "-";
  operation.push(displayText.textContent);
  numOne();
  multiOperate();
  num = [];
});
one.addEventListener("click", () => {
  displayText.textContent = 1;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
two.addEventListener("click", () => {
  displayText.textContent = 2;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
three.addEventListener("click", () => {
  displayText.textContent = 3;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
addition.addEventListener("click", () => {
  displayText.textContent = "+";
  operation.push(displayText.textContent);
  numOne();
  multiOperate();
  num = [];
});
zero.addEventListener("click", () => {
  displayText.textContent = 0;
  num.push(displayText.textContent);
  displayText.textContent = +num.join("");
});
decimal.addEventListener("click", () => {
  displayText.textContent = ".";
  num.push(displayText.textContent);
  displayText.textContent = num.join("");
  if (num.includes(".")) {
    decimal.disabled = true;
  }
});
equals.addEventListener("click", () => {
  numTwo();
  displayText.textContent = operate(operation, firstValue, secondValue).toFixed(
    2
  );
  firstValue = Number(displayText.textContent);
  secondValue = 0;
  num = [];
  operation.shift();
});

// Storing inputs into variables
const numOne = () => {
  if (firstValue != null) {
    return firstValue;
  } else {
    firstValue = +num.join("");
    return firstValue;
  }
};

const numTwo = () => {
  secondValue = +num.join("");
  return secondValue;
};

// String together several operations
const multiOperate = () => {
  if (operation.length == 2 && firstValue != null) {
    secondValue = +num.join("");
    displayText.textContent = operate(
      operation[0],
      firstValue,
      secondValue
    ).toFixed(2);
    firstValue = Number(displayText.textContent);
    secondValue = 0;
    operation.shift();
  }
};
