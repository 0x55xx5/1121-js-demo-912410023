import { products_23, all_products_23 } from './p1_data_23.js';

let product_23 = products_23;
const productContainer = document.querySelector('.products-container');

console.log('products_23', products_23);

const DisplayProducts = (products) => {
  let DisplayProducts = products
    .map((products) => {
      const { id, title, price, category, img } = products;
      return `
    
      <div class="single-product">
        <img
          src="./${img}"
          class="single-product-img img"
          alt="${title}"
        />
        <footer>
          <h3 class="name">${title} (${id})</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>  
     `;
    })
    .join('');
  productContainer.innerHTML = DisplayProducts;
  handleBtnsDelete();
};

document.addEventListener('DOMContentLoaded', () => {
  DisplayProducts(product_23);
});
