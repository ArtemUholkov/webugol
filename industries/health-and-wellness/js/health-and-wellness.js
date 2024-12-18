document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.testimonials__container-item');
    const testimonialsSection = document.querySelector('.testimonials');
    const wrappers = document.querySelectorAll('.testimonials__wrapper');
    let activeContainer = null;
    let lastScrollY = window.scrollY;

    function resetContainers() {
        containers.forEach((container) => {
            container.style.transform = 'translateX(0)';
            container.style.opacity = '1';
            container.classList.remove('open');
        });

        testimonialsSection.style.height = '';
        activeContainer = null;
    }

    function handleScroll() {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY) > 50) {
            lastScrollY = currentScrollY;
            return;
        }
    }

    window.addEventListener('scroll', handleScroll);

    function handleClickForThree(containerClicked, startIndex, indexInRow) {
        if (activeContainer === containerClicked) {
            resetContainers();
            activeContainer = null;
        } else {
            resetContainers();
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

    function handleClickForTwo(containerClicked, startIndex, indexInRow) {
        if (activeContainer === containerClicked) {
            resetContainers();
            activeContainer = null;
        } else {
            resetContainers();
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

    function handleClickForOne(containerClicked, startIndex) {
        if (activeContainer === containerClicked) {
            resetContainers();
            activeContainer = null;
        } else {
            resetContainers();
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

    containers.forEach((container, index) => {
        container.addEventListener('click', function () {
            if (container.classList.contains('open')) {
                return;
            }

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

    wrappers.forEach((wrapper) => {
        wrapper.addEventListener('click', (event) => {
            const parentContainer = wrapper.closest('.testimonials__container-item');
            if (parentContainer && parentContainer.classList.contains('open')) {
                resetContainers();
                activeContainer = null;
                event.stopPropagation();
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (activeContainer && !event.target.closest('.testimonials__container-item')) {
            resetContainers();
        }
    });

    // window.addEventListener('resize', () => {
    //     resetContainers();
    // });
});


//Main modal form 
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalButton = document.querySelector(".hw-main__button");
    const openModalFooterButton = document.querySelector(".prefooter__button");
    const closeModalButton = document.getElementById("closeModal");

    openModalButton.addEventListener("click", () => {
        modal.classList.add("visible");
    });

    openModalFooterButton.addEventListener("click", () => {
        modal.classList.add("visible");
    });


    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("visible");
        }
    });
});