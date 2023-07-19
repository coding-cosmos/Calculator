function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b !== 0) return a / b;
  else {
    alert("can't divide by 0");
    return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      return add(+firstNum, +secondNum);
    case "-":
      return subtract(+firstNum, +secondNum);
    case "x":
      return multiply(+firstNum, +secondNum);
    case "/":
      return divide(+firstNum, +secondNum);
  }
}

const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const values = document.querySelectorAll(".valueBtn");
const dot = document.querySelector("#dot");
const operators = document.querySelectorAll(".operator");
const backspace = document.querySelector('#backspace');
const display = document.querySelector(".display");

display.value = "0";
let prevContent = "";
let prevOpValue = "+";

// add click event listener to each value btn;
values.forEach((value) => {
  value.addEventListener("click", () => {
    enableOperators();
    setDisplayValue(value.textContent);
  });
});

// set value on display
function setDisplayValue(text) {
  display.value = `${prevContent}${text}`;
  prevContent = display.value;
}

// disable operators and get result if two operator are clicked
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    disableOperator();
    getNoAndOperator(operator);
  });
});

// get numbers and operator from display value
function getNoAndOperator(operator) {
  let currentOpValue = operator.textContent;

  let displayValue = display.value;
  displayValue = displayValue.slice(0, displayValue.length - 1);

  let numbers = displayValue.split(prevOpValue);
  if (numbers.length === 2) {
    performOperation(numbers[0], numbers[1], prevOpValue, currentOpValue);
  }

  prevOpValue = currentOpValue;
}

// handle when equal is clicked
equal.addEventListener("click", () => {
  let numbers = [];
  let displayValue = display.value;
  let op = ["+", "-", "x", "/"];
  let index = 0;

  while (numbers.length !== 2) {
    if (index === 3) {
      break;
    }
    numbers = displayValue.split(op[index++]);
  }
  if (numbers.length === 2) {
    performOperation(numbers[0], numbers[1], op[--index], "");
  }
  prevContent = display.value;
});

// perform the required operator on numbers
function performOperation(firstNum, secondNum, operator, newOperator) {
  prevContent = "";
  setDisplayValue(`${operate(firstNum, secondNum, operator)}${newOperator}`);
}

// clear the display
clear.addEventListener("click", () => {
  prevContent = "";
  setDisplayValue("0");
  prevContent = "";
  prevOpValue = "+";
  enableDot();
  enableOperators();
});

// clear one thing
backspace.addEventListener("click",()=>{
  let displayValue = display.value;
  displayValue = displayValue.slice(0, displayValue.length - 1);
  prevContent = "";
  setDisplayValue(displayValue);
  prevContent = displayValue;
})

function enableOperators() {
  operators.forEach((operator) => (operator.disabled = false));
  equal.disabled = false;
}
function disableOperator() {
  operators.forEach((operator) => (operator.disabled = true));
  equal.disabled = true;
  enableDot();
}

dot.addEventListener("click", disableDot);
function enableDot() {
  dot.disabled = false;
}
function disableDot() {
  dot.disabled = true;
}
