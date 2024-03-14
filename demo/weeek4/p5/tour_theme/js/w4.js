import { tours } from '../data_23.js';
console.log(tours);

const section = document.querySelector('.section-center');

const showToursData = () => {
  const tourInfosHTML = tours
    .map((item) => {
      const { id, name, local_img, price, info } = item;
      return `
        <article class="single-tour">
        <img src="${local_img}" alt="Best of Paris in 7 Days Tour" />
        <footer>
          <div class="tour-info">
            <h4>${name}</h4>
            <h4 class="tour-price">${price}</h4>
          </div>
          <p>
          ${info} ...<button>read more</button>
          </p>
          <button class="delete-btn">not interested</button>
        </footer>
      </article>
        `;
    })
    .join('');

  section.innerHTML = tourInfosHTML;
};
window.addEventListener('DOMContentLoaded', () => {
  showToursData();
});
