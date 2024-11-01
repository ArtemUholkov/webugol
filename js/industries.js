document.addEventListener("DOMContentLoaded", function() {
    const navigationItems = document.querySelectorAll('.main-industry__vertical-navigation__item');

    navigationItems.forEach(item => {
        item.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.querySelector('.main-industry__page-name').textContent = ''; 
            } else {

                navigationItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    navItem.querySelector('.main-industry__page-name').textContent = ''; 
                });

                this.classList.add('active');

                const pageName = this.getAttribute('data-page');
                this.querySelector('.main-industry__page-name').textContent = pageName;
            }
        });
    });
});

document.querySelectorAll('.main-industry__vertical-navigation__item').forEach(item => {
    item.addEventListener('click', () => {
        const page = item.getAttribute('data-page').toLowerCase().replace(/ /g, '-'); // Заменяем пробелы на дефисы
        const targetSection = document.getElementById(page);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


