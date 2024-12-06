document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-section__container-item');
    const mediaQuery = window.matchMedia('(max-width: 1200px)');

    let lastOpenedItem = null;

    items.forEach((item) => {
        const visiblePart = item.querySelector('.faq-section__visible-item');
        const hiddenContent = item.querySelector('.faq-section__hidden-item');

        const toggleItem = () => {
            if (lastOpenedItem && lastOpenedItem !== item) {
                const lastHiddenContent = lastOpenedItem.querySelector('.faq-section__hidden-item');
                if (mediaQuery.matches) {
                    lastHiddenContent.style.maxHeight = '0';
                    lastHiddenContent.style.opacity = '0';
                    setTimeout(() => {
                        lastHiddenContent.style.pointerEvents = 'none';
                    }, 300);
                } else {
                    lastHiddenContent.style.transform = 'translateX(-100%)';
                    lastHiddenContent.style.opacity = '0';
                    lastHiddenContent.style.pointerEvents = 'none';
                }
            }

            const isOpen = lastOpenedItem === item;

            if (lastOpenedItem) {
                const lastHiddenContent = lastOpenedItem.querySelector('.faq-section__hidden-item');
                if (mediaQuery.matches) {
                    lastHiddenContent.style.maxHeight = '0';
                    lastHiddenContent.style.opacity = '0';
                    setTimeout(() => {
                        lastHiddenContent.style.pointerEvents = 'none';
                    }, 300);
                } else {
                    lastHiddenContent.style.transform = 'translateX(-100%)';
                    lastHiddenContent.style.opacity = '0';
                    lastHiddenContent.style.pointerEvents = 'none';
                }
                if (isOpen) {
                    lastOpenedItem = null;
                    return;
                }
            }

                if (mediaQuery.matches) {
                    hiddenContent.style.display = 'block'; 
                    const height = hiddenContent.scrollHeight;
                    hiddenContent.style.maxHeight = `${height}px`;
                    hiddenContent.style.opacity = '1';
                    hiddenContent.style.display = ''; 
                } else {
                    hiddenContent.style.transform = 'translateX(0%)';
                    hiddenContent.style.opacity = '1';
                }
                hiddenContent.style.pointerEvents = 'all';
                lastOpenedItem = item;
            
        };

        visiblePart.addEventListener('click', toggleItem);
        visiblePart.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleItem();
        });
    });
});
