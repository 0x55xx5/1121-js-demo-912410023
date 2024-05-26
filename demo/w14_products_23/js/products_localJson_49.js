const url = './api/data/0.json';

let products_23 = [];

const productContainer = document.querySelector('.products-container');

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('fetchData', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

console.log('products_23', products_23);

const DisplayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      // const { id, title, price, category, img, remote_url} = product;
      const { name, price, image } = product.fields;
      // const { id } = product;
      return `
        <div class="single-product">
        <img
          src=${image[0].url}
          class="single-product-img img"
          alt=${name}
        />
        <footer>
          <h3 class="name">${name}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
      `;
    })
    .join('');
  console.log(productsContent);
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_23 = await fetchData(url);
  DisplayProducts(products_23);
});
