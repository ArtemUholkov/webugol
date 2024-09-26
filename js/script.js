const popup = document.querySelector('.popup');
const burger = document.querySelector('.header_burger');
const closeBut = document.querySelector('.close-button');
burger.addEventListener('click', () => {
  popup.classList.add('open');
});
closeBut.addEventListener('click', () => {
  popup.classList.remove('open');
  fstPop.classList.remove('appear_left');
  sndPop.classList.remove('appear_left');
  headWrap.classList.remove('add_border');
  pathone.setAttribute('stroke', 'white');
  pathtwo.setAttribute('stroke', 'white');
});

const fsttrig = document.querySelector('#fstlink');
const sndtrig = document.querySelector('#sndlink');
const fstPop = document.querySelector('.sec_popup');
const sndPop = document.querySelector('.trd_popup');
const allLinks = document.querySelectorAll('#removeit');
const headWrap = document.querySelector('.popup_burger_wrapper');
const pathone = document.querySelector('#mypath_one');
const pathtwo = document.querySelector('#mypath_two');

allLinks.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    fstPop.classList.remove('appear_left');
    sndPop.classList.remove('appear_left');
    headWrap.classList.remove('add_border');
    pathone.setAttribute('stroke', 'white');
    pathtwo.setAttribute('stroke', 'white');
    closeSearchButton.classList.remove('change_color');
    field.classList.remove('come_black');
  });
});

fsttrig.addEventListener('mouseenter', () => {
  fstPop.classList.add('appear_left');
  sndPop.classList.remove('appear_left');
  headWrap.classList.add('add_border');
  pathone.setAttribute('stroke', '#17171b');
  pathtwo.setAttribute('stroke', '#17171b');
  closeSearchButton.classList.add('change_color');
  field.classList.add('come_black');
});

sndtrig.addEventListener('mouseenter', () => {
  sndPop.classList.add('appear_left');
  fstPop.classList.remove('appear_left');
  headWrap.classList.add('add_border');
  pathone.setAttribute('stroke', '#17171b');
  pathtwo.setAttribute('stroke', '#17171b');
  closeSearchButton.classList.add('change_color');
  field.classList.add('come_black');
});

const field = document.querySelector('.field');
const searchButton = document.querySelector('.search-button');
const closeButton = document.querySelector('.close-button');
const searchField = document.querySelector('.search_field');
const closeSearchButton = document.querySelector('.close-search');

searchButton.addEventListener('click', () => {
  closeButton.classList.add('hide_search-button');
  searchField.classList.add('show_item');
  searchField.classList.add('show_search');
});

closeSearchButton.addEventListener('click', () => {
  closeButton.classList.remove('hide_search-button');
  searchField.classList.remove('show_item', 'show_search');
});
