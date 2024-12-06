document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-section__container-item');
    const mediaQuery = window.matchMedia('(max-width: 1200px)');

    let lastOpenedItem = null;

    items.forEach((item) => {
        const visiblePart = item.querySelector('.faq-section__visible-item');
        const hiddenContent = item.querySelector('.faq-section__hidden-item');

        const closeItem = (content) => {
            console.log('Закрытие элемента', content);
        
            if (mediaQuery.matches) {
                // Установите текущую высоту
                content.style.maxHeight = `${content.scrollHeight}px`;
                content.offsetHeight; // Принудительное обновление DOM
        
                // Сброс высоты
                content.style.maxHeight = '0';
                content.style.opacity = '0';
        
                setTimeout(() => {
                    content.style.pointerEvents = 'none';
                }, 300);
            } else {
                content.style.transform = 'translateX(-100%)';
                content.style.opacity = '0';
                content.style.pointerEvents = 'none';
            }
        };
        
        const openItem = (content) => {
            if (mediaQuery.matches) {
                content.style.display = 'block';
                const height = content.scrollHeight;
                console.log('scrollHeight:', height);
                content.style.maxHeight = `${height}px`;
                content.style.opacity = '1';
                content.style.display = ''; // Убираем инлайн-стиль
            } else {
                content.style.transform = 'translateX(0%)';
                content.style.opacity = '1';
            }
            content.style.pointerEvents = 'all';
        };

        const toggleItem = () => {
            const isOpen = lastOpenedItem === item;
            console.log('Клик по элементу:', item);
            console.log('Элемент уже открыт?', isOpen);
        
            if (lastOpenedItem) {
                const lastHiddenContent = lastOpenedItem.querySelector('.faq-section__hidden-item');
                console.log('Закрытие предыдущего элемента:', lastHiddenContent);
                closeItem(lastHiddenContent);
        
                if (isOpen) {
                    console.log('Закрытие текущего элемента, выход из функции');
                    lastOpenedItem = null;
                    return;
                }
            }
        
            console.log('Открытие текущего элемента');
            openItem(hiddenContent);
            lastOpenedItem = item;
        
            console.log('Стили текущего элемента после открытия:', hiddenContent.style);
        };
        

        visiblePart.addEventListener('click', toggleItem);
        visiblePart.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleItem();
        });
    });
});
