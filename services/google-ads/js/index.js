document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-section__container-item');
    const mediaQuery = window.matchMedia('(max-width: 1200px)');

    let lastOpenedItem = null;

    items.forEach((item) => {
        const visiblePart = item.querySelector('.faq-section__visible-item');
        const hiddenContent = item.querySelector('.faq-section__hidden-item');

        const toggleItem = () => {
            // Закрытие предыдущего открытого контейнера
            if (lastOpenedItem && lastOpenedItem !== item) {
                const lastHiddenContent = lastOpenedItem.querySelector('.faq-section__hidden-item');
                if (mediaQuery.matches) {
                    lastHiddenContent.style.maxHeight = '0'; // Сбрасываем высоту
                    lastHiddenContent.style.opacity = '0'; // Скрываем элемент
                } else {
                    lastHiddenContent.style.transform = 'translateX(-100%)';
                    lastHiddenContent.style.opacity = '0';
                }
                lastHiddenContent.style.pointerEvents = 'none'; // Отключаем взаимодействие
            }

            // Проверка состояния текущего элемента
            const isOpen =
                mediaQuery.matches
                    ? hiddenContent.style.maxHeight && hiddenContent.style.maxHeight !== '0px'
                    : hiddenContent.style.transform === 'translateX(0%)';

            if (isOpen) {
                // Закрытие текущего элемента
                if (mediaQuery.matches) {
                    hiddenContent.style.maxHeight = '0';
                    hiddenContent.style.opacity = '0';
                } else {
                    hiddenContent.style.transform = 'translateX(-100%)';
                    hiddenContent.style.opacity = '0';
                }
                hiddenContent.style.pointerEvents = 'none';
                lastOpenedItem = null;
            } else {
                // Открытие текущего элемента
                if (mediaQuery.matches) {
                    hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px'; // Задаем реальную высоту
                    hiddenContent.style.opacity = '1'; // Делаем элемент видимым
                } else {
                    hiddenContent.style.transform = 'translateX(0%)';
                    hiddenContent.style.opacity = '1';
                }
                hiddenContent.style.pointerEvents = 'all'; // Включаем взаимодействие
                lastOpenedItem = item;
            }
        };

        // Обработка кликов и тач-событий
        visiblePart.addEventListener('click', toggleItem);

        // iPhone-specific: предотвращаем задержку событий touch
        visiblePart.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleItem();
        });
    });
});
