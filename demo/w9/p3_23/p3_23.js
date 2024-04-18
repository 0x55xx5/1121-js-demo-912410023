import { data } from './data.js';
console.log(data);
function changeImage(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 3:
      player.innerHTML = `<img src="./images/TKU${index}.png" data-id="${index}" style="width: 100%; height: auto" />`;
  }
}

function showTKU60() {
  const p = document.querySelector('#menu1');
  console.log(p);
  const displayMenuItems = (menuItems) => {
    let displayMenu = data
      .map((item) => {
        const { id, title, category, price, img, desc } = item;
        return `
        <ul>
            <li onclick="changeImage(${id})">
              <a href="#" data-id="${index}" >${title}</a>
            </li>
          </ul>
        `;
      })
      .join('');
    console.log(displayMenu);
    p.innerHTML = displayMenu;
  };
  displayMenuItems();
}
const show = document.querySelector('#show');
show.addEventListener('click', showTKU60);
const clr = document.querySelector('#clr');
clr.addEventListener('click', clearMenu1All);
function clearMenu1All() {
  const p = document.querySelector('#menu1');
  p.innerHTML = '';
}
window.addEventListener('DOMContentLoaded', () => {
  showTKU60();
});
