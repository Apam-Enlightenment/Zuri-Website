const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal-2');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnsOpenModal2 = document.querySelectorAll('.btn--show-modal-2');
const btnCloseModal = document.querySelector('.btn--close-modal');

const openModal = function (e) {
    e.preventDefault()
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const openModal2 = function (e) {
    e.preventDefault()
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
  
const closeModal = function () {
    modal.classList.add('hidden');
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
};
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))
  btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnsOpenModal2.forEach(btn => btn.addEventListener('click', openModal2))