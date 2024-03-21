const userInput = document.querySelector('#input-number');
const currentCal = document.querySelector('#current-calculation');
const currentResultOp = document.querySelector('#current-result');

//+/*-
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivide = document.querySelector('#btn-divide');
const btnSubtract = document.querySelector('#btn-subtract');
const btnAdd = document.querySelector('#btn-add');
console.log(btnAdd);
const result = 0;
let currentResult = result;
function add() {
  const oprnd1 = currentResult;
  const oprnd2 = getUserInput();
  currentResult = oprnd1 + oprnd2;
  const inputText = `${oprnd1}+${oprnd2}`;
  getOutPut(currentResult, inputText);
}
function getOutPut(result, inputText) {
  currentResultOp.textContent = result;
  currentCal.textContent = inputText;
}

function getUserInput() {
  return parseInt(userInput.value);
}
btnAdd.addEventListener('click', add);
