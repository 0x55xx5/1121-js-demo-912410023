// import { products_23, all_products_23 } from './p1_data_23.js';

import { _supabase } from './clientSupabase_23.js';

let products_23 = [];

// console.log('products_23', products_23);

const productContainer = document.querySelector('.items');
const companyBtns = document.querySelectorAll('.company-btn');

const getProductsSupabase_23 = async () => {
  try {
    let { data, error } = await _supabase.from('store_f2_xx').select();
    console.log('products data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

companyBtns.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const companyName = e.currentTarget.dataset.id;
    console.log('companyName', companyName);
    const products = await getProductsSupabase_23();
    if (companyName === 'all') {
      products_23 = products;
    } else {
      products_23 = products.filter(
        (product) => product.company_23.name === companyName
      );
    }
    console.log(`${companyName} products`, products_23);

    // displayProducts(products_23);
  });
});

const displayProducts = (products) => {
  products = products.filter((product) => product.category_id === 4);
  let productsContent = products
    .map((product) => {
      const { category_id, local_img, name, price, remote_img, id } = product;
      // const { id } = product;
      return `
        <div class="collection-item">
            <img class="image" src="${remote_img}" />
            <div class="collection-footer">
              <span class="name">${name}</span>
              <span class="price">${price}</span>
            </div>
            <button class="custom-button">Add to Cart</button>
          </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_23 = await getProductsSupabase_23();
  displayProducts(products_23);
});
