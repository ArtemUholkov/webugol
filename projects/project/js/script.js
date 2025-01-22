document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.about__menu');
  const menuOffset = menu.getBoundingClientRect().top + window.scrollY;
  const earlyOffset = 100;

  window.addEventListener('scroll', function () {
    const triggerPoint = window.scrollY + window.innerHeight / 2 - earlyOffset;

    if (triggerPoint >= menuOffset) {
      menu.classList.add('sticky');
    } else {
      menu.classList.remove('sticky');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('.details__top-marker');
  const contents = document.querySelectorAll('[data-content]');

  markers.forEach((marker) => {
    marker.addEventListener('click', () => {
      const target = marker.getAttribute('data-marker');

      contents.forEach((content) => {
        if (content.getAttribute('data-content') === target) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });

      markers.forEach((m) => m.classList.remove('active'));
      marker.classList.add('active');
    });
  });
});
//Footer modal form
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalFooterButton = document.querySelector('.prefooter__button');
  const openModalPreferenceButton = document.querySelector('.preference-section__btn');
  const closeModalButton = document.getElementById('closeModal');

  openModalFooterButton.addEventListener('click', () => {
    modal.classList.add('visible');
  });

  // openModalPreferenceButton.addEventListener('click', () => {
  //   modal.classList.add('visible');
  // });

  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('visible');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('visible');
    }
  });
});
