const popup = document.querySelector('.popup');
const burger = document.querySelector('.header_burger');
const closeBut = document.querySelector('.close-button');
burger.addEventListener('click', () => {
  popup.classList.add('open');
});
closeBut.addEventListener('click', () => {
  popup.classList.remove('open');
});
