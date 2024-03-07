const userInput = document.querySelector('#input-number');
const currentCal = document.querySelector('#current-calculation');
const currentResultOp = document.querySelector('#current-result');

//+/*-
const c = document.querySelector('#btn-c');
const f = document.querySelector('#btn-f');

const result = 0;
let currentResult = result;
function c2f() {
    let oprnd1 = currentResult;
    let oprnd2 = getUserInput();//input

    oprnd2 = Number(oprnd2);
    oprnd2.toFixed(2);
    oprnd1 = (oprnd2 * 9 / 5 + 32).toFixed(2);
    const op = `${oprnd2} C==${oprnd1} F`;
    getOutPut(oprnd1, op);

}
function getOutPut(result, inputText) {
    currentResultOp.textContent = result;
    currentCal.textContent = inputText;
}

function getUserInput() {
    return parseFloat(userInput.value);
}
c.addEventListener('click', c2f);
f.addEventListener('click', ()=>{
    let oprnd1 = currentResult;
    let oprnd2 = getUserInput();//input

    oprnd2 = Number(oprnd2);
    oprnd2.toFixed(2);
    oprnd1 = ((oprnd2-32) * 5 / 9 ).toFixed(2);
    const op = `${oprnd2} F==${oprnd1} C`;
    getOutPut(oprnd1, op);
});


