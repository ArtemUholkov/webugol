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
