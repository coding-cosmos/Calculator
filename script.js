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
    return a/b;
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
        case "x": return multiply(firstNum,secondNum);
        case "/": return divide(firstNum,secondNum);
    }
}


const  display = document.querySelector(".display");
display.textContent = "0";
let prevContent ="";

// add click event listener to each value btn;
const values = document.querySelectorAll(".valueBtn");
values.forEach((value)=>{
    value.addEventListener("click",displayValue);
})

function displayValue(){
display.textContent =`${prevContent}${this.textContent}`;
  prevContent = display.textContent;
}
