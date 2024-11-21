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
        const page = item.getAttribute('data-page').toLowerCase().replace(/ /g, '-');
        const targetSection = document.getElementById(page);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.main-industry__vertical-navigation');
    const navItems = document.querySelectorAll('.main-industry__vertical-navigation__item');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(navItem => navItem.classList.remove('active'));

            item.classList.add('active');

            nav.classList.add('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
});



