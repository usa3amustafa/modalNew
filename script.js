'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const toggleHiddenClass = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

// for (let i = 0; i < showModalBtns.length; i++) {
//   showModalBtns[i].addEventListener('click', toggleHiddenClass);
// }

showModalBtns.forEach(showModalBtn => {
  showModalBtn.addEventListener('click', toggleHiddenClass);
});

closeModal.addEventListener('click', toggleHiddenClass);

document.addEventListener('keydown', e => {
  console.log(e);
  if (
    e.key === 'Escape' &&
    !(
      modal.classList.contains('hidden') && overlay.classList.contains('hidden')
    )
  ) {
    toggleHiddenClass();
  }
});

overlay.addEventListener('click', toggleHiddenClass);
