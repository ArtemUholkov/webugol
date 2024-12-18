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
const goBack = document.querySelectorAll('.popup_arrow-back');

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
goBack.forEach((item) => {
  item.addEventListener('click', () => {
    resetState();
  });
});
const indLinks = document.querySelectorAll('.industries_link_item');
const indContents = document.querySelectorAll('.induestries_content_item');

indLinks.forEach((item, index) => {
  item.addEventListener('click', () => {
    // If the clicked item is already active, do nothing
    if (item.classList.contains('active-link')) {
      return; // Exit the function if the link is already active
    }

    // Remove active-link class from all items
    indLinks.forEach((link) => link.classList.remove('active-link'));

    // Hide all content items with fade-out effect
    indContents.forEach((content) => {
      if (content.classList.contains('fade-in')) {
        content.classList.remove('fade-in'); // Start fade-out animation
        content.classList.add('fade-out'); // Trigger fade-out

        // Set timeout to hide after fading out
        setTimeout(() => {
          content.style.display = 'none'; // Hide the item after fade-out
        }, 200); // Match this with CSS transition duration
      }
    });

    // Add active-link class to the clicked item
    item.classList.add('active-link');

    // Display the corresponding content with fade-in effect
    const activeContent = indContents[index];
    activeContent.style.display = 'flex'; // Show the active content
    requestAnimationFrame(() => {
      activeContent.classList.remove('fade-out'); // Ensure it's not fading out
      activeContent.classList.add('fade-in'); // Trigger the fade-in animation
    });
  });
});

// Initial state: Display the first content and mark the first link as active
indLinks[0].classList.add('active-link');
indContents[0].style.display = 'flex'; // Ensure only the first content is visible
requestAnimationFrame(() => {
  indContents[0].classList.add('fade-in'); // Trigger the fade-in animation for the first item
});
let activeFaqId = null;

function toggleAnswer(faqId) {
  const currentFaq = document.getElementById(faqId);
  const currentAnswerWrapper = currentFaq.querySelector('.answer-wrapper');
  const currentQuestionWrapper = currentFaq.querySelector('.question-wrapper');
  const currentIcon = currentFaq.querySelector('.plus-minus-icon'); // Select the plus/minus icon

  if (activeFaqId && activeFaqId !== faqId) {
    // Collapse previously active FAQ
    const previousFaq = document.getElementById(activeFaqId);
    const previousAnswerWrapper = previousFaq.querySelector('.answer-wrapper');
    const previousQuestionWrapper = previousFaq.querySelector('.question-wrapper');
    const previousIcon = previousFaq.querySelector('.plus-minus-icon'); // Select the plus/minus icon of previous FAQ

    previousAnswerWrapper.style.maxHeight = null;
    previousAnswerWrapper.style.opacity = 0;
    previousQuestionWrapper.classList.remove('active');
    previousIcon.textContent = '+'; // Change to plus when closed
  }

  if (activeFaqId === faqId) {
    // Collapse current if it's the same one clicked
    currentAnswerWrapper.style.maxHeight = null;
    currentAnswerWrapper.style.opacity = 0;
    currentQuestionWrapper.classList.remove('active');
    currentIcon.textContent = '+'; // Change to plus when collapsed
    activeFaqId = null; // Reset activeFaqId
  } else {
    // Expand current FAQ
    currentAnswerWrapper.style.maxHeight = currentAnswerWrapper.scrollHeight + 'px';
    currentAnswerWrapper.style.opacity = 1;
    currentQuestionWrapper.classList.add('active');
    currentIcon.innerHTML = '&ndash;'; // Change to minus when expanded
    activeFaqId = faqId; // Set the new active FAQ
  }
}

// Optionally, trigger the first FAQ to open on page load
setTimeout(() => {
  document.querySelector('#faq-click').click();
}, 1000);
// document.querySelector('#faq-click').click();

// TEAM MAIN
if (innerWidth > 630) {
  const teamitems = document.querySelectorAll('.team_content_item');
  console.log(teamitems);
  teamitems.forEach((item) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('active-item')) {
        teamitems.forEach((i) => {
          i.classList.remove('active-item');
        });
        item.classList.add('active-item');
      }
    });
  });
}
// Mouse drag scroll functionality
const wrapContTeam = document.querySelector('.wrap-cont-team');
let isDown = false;
let startX;
let scrollLeft;

wrapContTeam.addEventListener('mousedown', (e) => {
  isDown = true;
  wrapContTeam.classList.add('active');
  startX = e.pageX - wrapContTeam.offsetLeft;
  scrollLeft = wrapContTeam.scrollLeft;
});

wrapContTeam.addEventListener('mouseleave', () => {
  isDown = false;
  wrapContTeam.classList.remove('active');
});

wrapContTeam.addEventListener('mouseup', () => {
  isDown = false;
  wrapContTeam.classList.remove('active');
});

wrapContTeam.addEventListener('mousemove', (e) => {
  if (!isDown) return; // If mouse is not pressed, don't move
  e.preventDefault();
  const x = e.pageX - wrapContTeam.offsetLeft;
  const walk = (x - startX) * 2; // Scroll faster with higher multiplier (2 here)
  wrapContTeam.scrollLeft = scrollLeft - walk;
});


//Main modal form 
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalButton = document.querySelector(".main_button");
  const openModalFooterButton = document.querySelector(".footer-contacts__button");
  const closeModalButton = document.getElementById("closeModal");

  openModalFooterButton.addEventListener("click", () => {
    modal.classList.add("visible");
  });

  openModalButton.addEventListener("click", () => {
    modal.classList.add("visible");
  });

  closeModalButton.addEventListener("click", () => {
    modal.classList.remove("visible");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("visible");
    }
  });
});
