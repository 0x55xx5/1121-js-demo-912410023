// import menu from './data_49.js';

let menu = [];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5dXlrZG14dG56enhib21uemJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMTAxNzYsImV4cCI6MjAyOTg4NjE3Nn0.CoJHFTOCz97b0a4tF38nw74urq9xB-kiiZF1ZODYEZc';
const url = 'https://pyuykdmxtnzzxbomnzbx.supabase.co';

const _supabase = supabase.createClient(url, key);
const fetchData = async () => {
  try {
    let { data, error } = await _supabase.from('products').select('*');

    console.log('fetch menu', data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

console.log('menu', menu);

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems
    .map((item) => {
      const { id, title, catelog, price, serverimg, desc } = item;
      return `
        <article class="menu-item">
        <img
          src=${serverimg}
          alt="buttermilk"
          pancakes=""
          class="photo"
        />
        <div class="item-info">
          <header>
            <h4>${title}</h4>
            <h4 class="price">$${price}</h4>
          </header>
          <p class="item-text">
            ${desc}
          </p>
        </div>
        </article>
        `;
    })
    .join('');
  // console.log('displayMenu', displayMenu);
  sectionCenter.innerHTML = displayMenu;
};

// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shake'];

const displayMenuButtons = (menu) => {
  const menuCategories = new Set(
    menu.map((item) => {
      return item.catelog;
    })
  );
  // console.log('menuCategories', menuCategories);

  const categories = ['all', ...menuCategories];
  console.log('categories', categories);

  let menuButtons = categories
    .map((category) => {
      return `
    <button type="button" class="filter-btn" data-id=${category}>${category}</button
    >
    `;
    })
    .join('');
  // console.log('menuButtons', menuButtons);
  btnContainer.innerHTML = menuButtons;

  const filterBtns = document.querySelectorAll('.filter-btn');
  console.log('filterBtns', filterBtns);
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const filterMenu = menu.filter((item) => item.category === category);
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filterMenu);
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', async () => {
  menu = await fetchData();
  displayMenuItems(menu);
  displayMenuButtons(menu);
  //showBtn();
});
