document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-container .slider-image');
    const buttons = document.querySelectorAll('.slider-container_btns .slider-container_btn');
    let currentIndex = 0;

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

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    showImage(currentIndex);
});
