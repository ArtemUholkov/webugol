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


document.addEventListener("DOMContentLoaded", () => {
  const markers = document.querySelectorAll(".details__top-marker");
  const contents = document.querySelectorAll("[data-content]");

  markers.forEach(marker => {
    marker.addEventListener("click", () => {
      const target = marker.getAttribute("data-marker");

      contents.forEach(content => {
        if (content.getAttribute("data-content") === target) {
          content.style.display = "block"; 
        } else {
          content.style.display = "none"; 
        }
      });

      markers.forEach(m => m.classList.remove("active"));
      marker.classList.add("active");
    });
  });
});
