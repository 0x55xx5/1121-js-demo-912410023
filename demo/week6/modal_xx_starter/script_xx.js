const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modals', modals);
console.log('show-modal', btnsOpenModal);

const openModal = (modalId) => {
  const mdl=document.querySelector(`.${modalId}`);
  mdl.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = (modalId) => {
  const mdl=document.querySelector(`.${modalId}`);
  mdl.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 完成closeModal函數，使其可以關閉指定的modal

const closeAllModals = () => {
  modals.forEach((modal) => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id= e.currentTarget.dataset.id;
    console.log(id);
    openModal(id);
  });
});

btnCloseModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id= e.currentTarget.dataset.id;
    console.log(id);
    closeModal(id);
  });
});

overlay.addEventListener('click', closeAllModals);
