import { _supabase } from './clientSupabase_49.js';

let products_49 = [];

const getProductsSupabase_49 = async () => {
  try {
    let { data, error } = await _supabase.from('products_23').select('*');
    console.log('product data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const productContainer = document.querySelector('.products-container');

console.log('products_49', products_49);
const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      // const { id, title, price, category, img, remote_url} = product;
      const { title, price, remoteImg } = product;
      // const { id } = product;
      return `
      <div class="single-product">
      <img
        src=${remoteImg}
        class="single-product-img img"
        alt=${title}
      />
      <footer>
        <h3 class="name">${title}</h3>
        <span class="price">$${price}</span>
      </footer>
    </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_49 = await getProductsSupabase_49();
  displayProducts(products_49);
});
