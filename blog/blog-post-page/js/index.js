document.addEventListener("DOMContentLoaded", () => {
    const scrollElement = document.querySelector('.blog-section__scroll');
    const blogSection = document.querySelector('.blog-section');
    const SCROLL_OFFSET = 250; 

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 550,
                behavior: 'smooth'
            });
        });
    });

    if (scrollElement && blogSection) {
        window.addEventListener('scroll', () => {
            const blogRect = blogSection.getBoundingClientRect();
            const offsetTop = Math.max(0, -blogRect.top + SCROLL_OFFSET);

            scrollElement.style.transform = `translateY(${offsetTop}px)`;
        });
    }
});
