window.addEventListener('scroll', () => {
    if (activeContainer) {
        activeContainer.style.opacity = '1';
        activeContainer.style.transform = 'none'; // Оставляем открытый контейнер видимым
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.testimonials__container-item');
    const testimonialsSection = document.querySelector('.testimonials');
    let activeContainer = null;

    let isScrolling = false;

    function resetContainers(startIndex, numContainersInRow) {
        if (isScrolling || !activeContainer) return; // Избегаем сброса при прокрутке
    
        containers.forEach((container) => {
            if (container !== activeContainer) {
                container.style.transform = 'translateX(0)';
                container.style.opacity = '1';
                container.classList.remove('open');
            }
        });
    
        testimonialsSection.classList.remove('expanded-height');
    }

    function handleClickForTwo(containerClicked, startIndex, indexInRow) {
        if (activeContainer === containerClicked) {
            resetContainers(startIndex, 2);
            activeContainer = null;
        } else {
            resetContainers(startIndex, 2);
            containerClicked.classList.add('open');

            if (window.innerWidth < 1230) {
                testimonialsSection.classList.add('expanded-height');
            }

            containers.forEach((container, i) => {
                if (i < startIndex || i >= startIndex + 2) return;

                if (container === containerClicked) {
                    if (window.innerWidth < 1230) {
                        const containerRect = container.getBoundingClientRect();
                        const offset = (window.innerWidth / 2) - (containerRect.left + containerRect.width / 2);
                        container.style.transform = `translateX(${offset}px)`;

                        for (let j = startIndex + 2; j < containers.length; j++) {
                            containers[j].style.transform = 'translateY(500px)';
                        }
                    } else if (indexInRow === 0) {
                        container.style.transform = 'translateX(-100px)';
                    } else {
                        container.style.transform = `translateX(-${indexInRow * 560}px)`;
                    }
                } else if (i !== indexInRow + startIndex) {
                    container.style.transform = 'translateX(460px)';
                    container.style.opacity = '0';
                }
            });

            activeContainer = containerClicked;
        }
    }

    function handleClickForThree(containerClicked, startIndex, indexInRow) {
        if (activeContainer === containerClicked) {
            resetContainers(startIndex, 3);
            activeContainer = null;
        } else {
            resetContainers(startIndex, 3);
            containerClicked.classList.add('open');

            containers.forEach((container, i) => {
                if (i < startIndex || i >= startIndex + 3) return;

                if (container === containerClicked) {
                    container.style.transform = `translateX(-${indexInRow * 400}px)`;
                } else if (i < indexInRow + startIndex) {
                    container.style.transform = 'translateX(-100%)';
                    container.style.opacity = '0';
                } else if (i > indexInRow + startIndex) {
                    container.style.transform = `translateX(${(i - indexInRow) * 400}px)`;
                    container.style.opacity = '0';
                }
            });

            activeContainer = containerClicked;
        }
    }

    function handleClickForOne(containerClicked, startIndex) {
        if (activeContainer === containerClicked) {
            resetContainers(startIndex, 1);
            activeContainer = null;
        } else {
            resetContainers(startIndex, 1);
            containerClicked.classList.add('open');

            if (window.innerWidth < 991) {
                testimonialsSection.classList.add('expanded-height');
            }

            if (window.innerWidth < 991) {
                for (let j = startIndex + 1; j < containers.length; j++) {
                    containers[j].style.transform = 'translateY(500px)';
                }
            }

            activeContainer = containerClicked;
        }
    }

    function updateLayout() {
        resetContainers(0, containers.length);
        activeContainer = null;
    }

    // window.addEventListener('scroll', () => {
    //     isScrolling = true;
    //     clearTimeout(isScrolling);
    //     setTimeout(() => (isScrolling = false), 150); 
    // });

    containers.forEach((container, index) => {
        container.addEventListener('click', function () {
            const screenWidth = window.innerWidth;
            let numContainersInRow;

            if (screenWidth > 1490) {
                numContainersInRow = 3;
            } else if (screenWidth > 990) {
                numContainersInRow = 2;
            } else {
                numContainersInRow = 1;
            }

            const startOfRow = Math.floor(index / numContainersInRow) * numContainersInRow;
            const indexInRow = index % numContainersInRow;

            if (numContainersInRow === 3) {
                handleClickForThree(container, startOfRow, indexInRow);
            } else if (numContainersInRow === 2) {
                handleClickForTwo(container, startOfRow, indexInRow);
            } else {
                handleClickForOne(container, startOfRow);
            }
        });
    });

    window.addEventListener('resize', updateLayout);
});
