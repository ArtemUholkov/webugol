document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.about__menu');
    const menuOffset = menu.getBoundingClientRect().top + window.scrollY;
  
    // Adjust this offset value to make it sticky earlier
    const earlyOffset = 100; // You can adjust this value as needed
  
    window.addEventListener('scroll', function () {
      // Check if the scroll position plus half the viewport height minus the offset reaches the menu
      const triggerPoint = window.scrollY + window.innerHeight / 2 - earlyOffset;
  
      if (triggerPoint >= menuOffset) {
        menu.classList.add('sticky');
      } else {
        menu.classList.remove('sticky');
      }
    });
  });
  