const display = document.querySelector(".display h1");
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

let num = [];
let firstValue;
let secondValue;
let operation = [];

allClear.addEventListener("click", () => {
  location.reload();
  display.textContent = "0";
});
clear.addEventListener("click", () => {
  num.pop();
  display.textContent = +num.join("");
});
division.addEventListener("click", () => {
  display.textContent = "/";
  operation.push(display.textContent);
  numOne();
  multiOperate();
  num = [];
});
seven.addEventListener("click", () => {
  display.textContent = 7;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
eight.addEventListener("click", () => {
  display.textContent = 8;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
nine.addEventListener("click", () => {
  display.textContent = 9;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
multiplication.addEventListener("click", () => {
  display.textContent = "*";
  operation.push(display.textContent);
  numOne();
  multiOperate();
  num = [];
});
four.addEventListener("click", () => {
  display.textContent = 4;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
five.addEventListener("click", () => {
  display.textContent = 5;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
six.addEventListener("click", () => {
  display.textContent = 6;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
subtraction.addEventListener("click", () => {
  display.textContent = "-";
  operation.push(display.textContent);
  numOne();
  multiOperate();
  num = [];
});
one.addEventListener("click", () => {
  display.textContent = 1;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
two.addEventListener("click", () => {
  display.textContent = 2;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
three.addEventListener("click", () => {
  display.textContent = 3;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
addition.addEventListener("click", () => {
  display.textContent = "+";
  operation.push(display.textContent);
  numOne();
  multiOperate();
  num = [];
});
zero.addEventListener("click", () => {
  display.textContent = 0;
  num.push(display.textContent);
  display.textContent = +num.join("");
});
decimal.addEventListener("click", () => {
  display.textContent = ".";
  num.push(display.textContent);
  display.textContent = +num.join("");
});
equals.addEventListener("click", () => {
  numTwo();
  display.textContent = operate(operation, firstValue, secondValue);
  firstValue = Number(display.textContent);
  secondValue = 0;
  num = [];
  operation.shift();
});

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

const multiOperate = () => {
  if (operation.length == 2 && firstValue != null) {
    secondValue = +num.join("");
    display.textContent = operate(operation[0], firstValue, secondValue);
    firstValue = Number(display.textContent);
    secondValue = 0;
    operation.shift();
  }
};
