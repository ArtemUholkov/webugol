document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-container .slider-image');
    const buttons = document.querySelectorAll('.slider-container_btns .slider-container_btn');
    let currentIndex = 0;
    let autoSlideInterval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });

        buttons.forEach((btn, i) => {
            if (i === index) {
                btn.src = './assets/img/portfolio/active-btn.png'; 
                btn.classList.add('active-btn');
            } else {
                btn.src = './assets/img/portfolio/orange-btn.png';
                btn.classList.remove('active-btn');
            }
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000); 
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
            stopAutoSlide(); 
            startAutoSlide(); 
        });
    });

    showImage(currentIndex);
    startAutoSlide();

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
});



//faq section 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-section__container-item');
    const mediaQuery = window.matchMedia('(max-width: 1200px)');

    let lastOpenedItem = null;

    items.forEach((item) => {
        const visiblePart = item.querySelector('.faq-section__visible-item');
        const hiddenContent = item.querySelector('.faq-section__hidden-item');


        const openItem = () => {
            if (lastOpenedItem && lastOpenedItem !== item) {
                const lastHiddenContent = lastOpenedItem.querySelector('.faq-section__hidden-item');
                if (mediaQuery.matches) {
                    lastHiddenContent.style.maxHeight = '0';
                    lastHiddenContent.style.opacity = '0';
                } else {
                    lastHiddenContent.style.transform = 'translateX(-100%)';
                    lastHiddenContent.style.opacity = '0';
                }
                lastHiddenContent.style.pointerEvents = 'none';
                lastOpenedItem = null;
            }

            if (mediaQuery.matches) {
                hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
                hiddenContent.style.opacity = '1';
            } else {
                hiddenContent.style.transform = 'translateX(0%)';
                hiddenContent.style.opacity = '1';
            }
            hiddenContent.style.pointerEvents = 'all';
            lastOpenedItem = item;
        };

     
        hiddenContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });


        visiblePart.addEventListener('click', () => {
            if (lastOpenedItem !== item) {
                openItem();
            }
        });

        visiblePart.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (lastOpenedItem !== item) {
                openItem();
            }
        });
    });
});

