console.log("--------#4");

function sum(a, b) {
  return a + b;
}

const sumResult = sum(1, 2);
console.log(sumResult);

function minus(a, b) {
  return b - a;
}

const minusResult = minus(2, 1);
console.log(minusResult);

function multiply(a, b) {
  return a * b;
}

const multiplyResult = multiply(2, 2);
console.log(multiplyResult);

function divide(a, b) {
  return a / b;
}

const divideResult = divide(2, 2);
console.log(divideResult);

console.log("--------#5");

function numbersUp(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result = result + i + " ";
  }

  console.log(result);
}

numbersUp(5);

console.log("--------#6");

function numbersDown(n) {
  let result = "";

  for (i = n; i >= 1; i--) {
    result = result + i + " ";
  }
  console.log(result);
}

numbersDown(5);

console.log("---------#7");

function pow1(x, n) {
  let result = 1;
  for (i = 1; i <= n; i++) {
    result = result * x;
  }
  return result;
}

console.log(pow1(3, 3));

console.log("---------#8");

function isBigger(a, b) {
  return a > b;
}

console.log(isBigger(5, -1));

console.log("---------$9");

function isSmaller(a, b) {
  return a < b;
}

console.log(isSmaller(5, -1));
