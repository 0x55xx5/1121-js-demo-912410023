import { all_products_23 } from './p1_data_23.js';
const section = document.querySelector('.products-container');

const displayProducts = () => {
  const t = all_products_23.filter((p) => {
    if (p.id >= 3 && p.id < 11) {
      return p;
    }
  });
  console.log(t);
  const productsInfo = t
    .map((p) => {
      const { id, name, img, price } = p;
    
      // console.log(p);
      return `
      <div class="single-product">
        <img
          src="${img}"
          class="single-product-img img"
          alt="${name}"
        />
        <footer>
          <h5 class="name">${name}(P${id})</h5>
          <span class="price">${price}</span>
        </footer>
      </div>
      `;
   
    })
    .join('');
  section.innerHTML = productsInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayProducts();
});
