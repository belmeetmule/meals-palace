import './style.css';
import foodsUI from './modules/foodsUI.js';

foodsUI();

// close modal window when clicking outside of it
const modal = document.querySelector('.meal');

const modalDetailsContent = document.querySelector('.modal-details-content');

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modalDetailsContent.parentElement.classList.remove('displayModal');
  }
});
