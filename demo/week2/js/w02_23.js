const container = document.querySelector('#container');
const allLiEle = document.querySelectorAll('#board li');
const resetBtn = document.querySelector('#reset');


const playerO = 'o';
const playerX = 'x';
let turn = 0;
let done = false;


const funReset = () => {

  allLiEle[0].classList = '';
  allLiEle[4].classList = '';
  allLiEle[0].textContent = 'o';
  allLiEle[4].textContent = '+';

  allLiEle.forEach((item) => {
    item.classList = '';
    item.textContent = '+';
  });
  container.style.backgroundColor = '#888';

  turn = 0;
  done = false;
};
const checkWinGame = (symbol) => {
  let p = [];
  allLiEle.forEach((item) => {
    p.push(item.classList.contains(symbol))
  });
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;
  console.log(p);
  if ((p1 && p2 && p3) ||
    (p4 && p5 && p6) ||
    (p7 && p8 && p9)
    || (p1 && p4 && p7) || (p2 && p5 && p8) || (p3 && p6 && p9)
    || (p1 && p5 && p9) || (p3 && p5 && p7)) {
    return true;
  }
  else return false;

};
const showWinMsg = (tripleSymbol) => {
  if (tripleSymbol === 'o') {
    container.style.backgroundColor = 'rgba(144,237,144,0.5)';
  }
  else {
    container.style.backgroundColor = 'rgba(237,144,128,0.5)';
  }
  alert(`player ${tripleSymbol} is a winner`);
};
allLiEle.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('disable')) {
      return;
    }

    if (turn % 2 === 0) {
      item.textContent = 'o';
      // item.classList='o disabled';
      item.classList.add('o', 'disabled');
      if (checkWinGame( item.textContent)) {
        showWinMsg(item.textContent);
        done = true;
      }
    } else if (turn % 2 === 1) {
      item.textContent = 'x';
      item.classList.add('x', 'disabled');
      if (checkWinGame( item.textContent)) {
        showWinMsg(item.textContent);
        done = true;
      }
    }
    if (!done && turn < 8) {
      turn++;
    } else if (!done && turn >= 8) {
      alert('game is over!!TIE GAME')
    }



  });

});

resetBtn.addEventListener('click', funReset);

