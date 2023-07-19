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
console.log(division(5,0));