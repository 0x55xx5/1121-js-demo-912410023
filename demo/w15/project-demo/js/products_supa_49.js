// import { products_23, all_products_23 } from './p1_data_23.js';

import { _supabase } from './clientSupabase_23.js';

let products_23 = [];

// console.log('products_23', products_23);

const productContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn');

const getProductsSupabase_23 = async () => {
  try {
    let { data, error } = await _supabase.from('products_23').select('*, company_23(*)');
    // console.log('products data', data);
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
  if( companyName === 'all') {
    products_23 = products;
  } else {    
    products_23 = products.filter((product) => product.company_23.name === companyName
  );
}
  console.log(`${companyName} products`, products_23);

  displayProducts(products_23);
  });
});

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
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
  products_23 = await getProductsSupabase_23();
  displayProducts(products_23);
});
