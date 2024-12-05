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
