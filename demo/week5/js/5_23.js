import { menu } from '../data/d.js';
console.log(menu);
const cat = ['all', 'breakfast', 'lunch', 'dinner'];
const set1=new Set(menu.map((ite)=>{
  return ite.category;
}));
console.log(set1);
const categ=['all',...set1]
console.log(categ);


const showBtn = () => {
  const catHtml = categ
    .map((itm) => {
      const content = `
        <button type="button" class="filter-btn" data-id="${itm}">
        ${itm}
      </button>
          `;
      console.log(content);
      return content;
    })
    .join('');

  const section = document.querySelector('.btn-container');
  section.innerHTML = catHtml;
};

const showData = () => {
  const menuItemHTML = menu
    .map((itm) => {
      const { id, category, title, price, img, desc } = itm;
      const content = `
        <article class="menu-item">
        <img
          src=${img}
          alt="buttermilk"
          pancakes=""
          class="photo"
        />
        <div class="item-info">
          <header>
            <h4>${title}</h4>
            <h4 class="price">${price}</h4>
          </header>
          <p class="item-text">
          ${desc}
          </p>
        </div>
      </article>
        `;
      console.log(content);
      return content;
    })
    .join('');

  const section = document.querySelector('.section-center');
  section.innerHTML = menuItemHTML;
};

window.addEventListener('DOMContentLoaded', () => {
  showData();
  showBtn();
});
