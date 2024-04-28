import { _supabase } from './client.js';
console.log('client.js', _supabase);

let product_23 = [];

const productContainer = document.querySelector('.products-container');

//console.log('products_xx', products_xx);

const DisplayProducts = (products) => {
  let prods = products.map((product) => {
    const { id, title, img, price } = product;
    return `<div class="single-product">
  <img
          src="${img}"
          class="single-product-img img"
          alt="high-back bench"
        />
        <footer>
          <h3 class="name">${title}</h3>
          <span class="price">${price}</span>
        </footer>
  </div>
  `;
  }).join('');
  productContainer.innerHTML = prods;
}
const getProductFromDB = async () => {
  try {
    let { data, error } = await _supabase.from('product_23').select('*');
    console.log('product_23', data);
    return data;
  } catch (error) {

  }
};

document.addEventListener('DOMContentLoaded', async () => {
  product_23 = await getProductFromDB();
  DisplayProducts(product_23);
});
