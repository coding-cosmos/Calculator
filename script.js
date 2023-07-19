function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function division(a, b) {
  if (b !== 0) return a / b;
  else {
    alert("can't divide by 0");
  }
}

function multiply(a, b) {
  return a * b;
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum,secondNum,operator){
    switch(operator){
        case "+": return add(firstNum,secondNum);
        case "-": return subtract(firstNum,secondNum);
        case "*": return multiply(firstNum,secondNum);
        case "/": return divide(firstNum,secondNum);
    }
}