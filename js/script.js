// Cache DOM elements
const popup = document.querySelector('.popup');
const burger = document.querySelector('.header_burger');
const closeBut = document.querySelector('.close-button');
const fsttrig = document.querySelector('#fstlink');
const sndtrig = document.querySelector('#sndlink');
const fstPop = document.querySelector('.sec_popup');
const sndPop = document.querySelector('.trd_popup');
const allLinks = document.querySelectorAll('#removeit');
const headWrap = document.querySelector('.popup_burger_wrapper');
const pathone = document.querySelector('#mypath_one');
const pathtwo = document.querySelector('#mypath_two');
const field = document.querySelector('.field');
const searchButton = document.querySelector('.search-button');
const closeButton = document.querySelector('.close-button');
const searchField = document.querySelector('.search_field');
const closeSearchButton = document.querySelector('.close-search');
const arrowiconOne = document.querySelector('.nav_icon_one');
const arrowiconTwo = document.querySelector('.nav_icon_two');

// Helper function to toggle popup visibility
const togglePopup = (isOpen) => {
  popup.classList.toggle('open', isOpen);
  if (!isOpen) resetState();
};

// Helper function to reset the state
const resetState = () => {
  fstPop.classList.remove('appear_left');
  sndPop.classList.remove('appear_left');
  headWrap.classList.remove('add_border');
  pathone.setAttribute('stroke', 'white');
  pathtwo.setAttribute('stroke', 'white');
  closeSearchButton.classList.remove('change_color');
  field.classList.remove('come_black');
  arrowiconOne.classList.remove('rotate_it');
  arrowiconTwo.classList.remove('rotate_it');
};

// Helper function to toggle active state for fst/snd triggers
const toggleActiveState = (popElement, arrowIcon) => {
  const isActive = popElement.classList.contains('appear_left');

  resetState(); // Always reset first
  if (!isActive) {
    popElement.classList.add('appear_left');
    headWrap.classList.add('add_border');
    pathone.setAttribute('stroke', '#17171b');
    pathtwo.setAttribute('stroke', '#17171b');
    closeSearchButton.classList.add('change_color');
    field.classList.add('come_black');
    arrowIcon.classList.add('rotate_it'); // Add rotation only to the active arrow icon
  }
};

// Event listener for opening/closing popup
burger.addEventListener('click', () => togglePopup(true));
closeBut.addEventListener('click', () => togglePopup(false));

if (screen.width > 960) {
  // Hover events for larger screens
  allLinks.forEach((item) => item.addEventListener('mouseenter', resetState));
  fsttrig.addEventListener('mouseenter', () => toggleActiveState(fstPop, arrowiconOne));
  sndtrig.addEventListener('mouseenter', () => toggleActiveState(sndPop, arrowiconTwo));
} else {
  // Toggle on click events for smaller screens
  allLinks.forEach((item) => item.addEventListener('click', resetState));
  fsttrig.addEventListener('click', () => toggleActiveState(fstPop, arrowiconOne));
  sndtrig.addEventListener('click', () => toggleActiveState(sndPop, arrowiconTwo));
}

// Search field interactions
searchButton.addEventListener('click', () => {
  closeButton.classList.add('hide_search-button');
  searchField.classList.add('show_item', 'show_search');
});

closeSearchButton.addEventListener('click', () => {
  closeButton.classList.remove('hide_search-button');
  searchField.classList.remove('show_item', 'show_search');
});
const fstDropdown = document.getElementById('fstDropdown');
const sndDropdown = document.getElementById('sndDropdown');

// Function to toggle dropdown visibility
const toggleDropdown = (dropdown) => {
  if (dropdown.classList.contains('active')) {
    dropdown.classList.remove('active');
  } else {
    // Close other dropdowns first
    fstDropdown.classList.remove('active');
    sndDropdown.classList.remove('active');

    // Open the selected one
    dropdown.classList.add('active');
  }
};

// Add click event listeners for smaller screens
if (screen.width <= 960) {
  fsttrig.addEventListener('click', (e) => {
    e.preventDefault();
    toggleDropdown(fstDropdown);
  });

  sndtrig.addEventListener('click', (e) => {
    e.preventDefault();
    toggleDropdown(sndDropdown);
  });
}
