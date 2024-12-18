//Main modal form 
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalButton = document.querySelector(".main__button");
  const openModalFooterButton = document.querySelector(".footer-contacts__button");
  const closeModalButton = document.getElementById("closeModal");

  openModalFooterButton.addEventListener("click", () => {
    modal.classList.add("visible");
  });

  openModalButton.addEventListener("click", () => {
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


//Video - about us section
function openModal() {
  const modal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-frame');

  modal.style.display = 'block';
  videoFrame.src = 'https://www.youtube.com/embed/WWSQqBuLfi0?autoplay=1&si=qXpxc9Q3cnV5jPw5';

  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', handleEscapeKey);
}

function closeModal() {
  const modal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-frame');

  modal.style.display = 'none';
  videoFrame.src = '';

  document.body.classList.remove('no-scroll');

  document.removeEventListener('keydown', handleEscapeKey);
}

document.querySelector('.close').onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  const modal = document.getElementById('video-modal');
  const modalContent = document.querySelector('.modal-content');

  if (event.target === modal && !modalContent.contains(event.target)) {
    closeModal();
  }
};

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

//team section
document.addEventListener('DOMContentLoaded', function () {
  const containers = document.querySelectorAll('.team-section__image-container');
  const descriptionContainers = document.querySelectorAll('.team-section__description-container');
  let activeContainer = null;

  descriptionContainers.forEach(descriptionContainer => {
    descriptionContainer.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });

  function adjustContainerHeight(containerClicked, numContainersInRow) {
    const parentContainer = containerClicked.closest('.team-section');
    if (!parentContainer) return;

    if (!parentContainer.dataset.baseHeight) {
      parentContainer.dataset.baseHeight = window.getComputedStyle(parentContainer).height;
    }

    const baseHeight = parseInt(parentContainer.dataset.baseHeight, 10);

    if (window.innerWidth < 500) {
      if (containerClicked.classList.contains('open')) {
        parentContainer.style.height = `${baseHeight + 600}px`;
      } else {
        parentContainer.style.height = `${baseHeight}px`;
      }
    } else if (window.innerWidth < 640) {
      if (containerClicked.classList.contains('open')) {
        parentContainer.style.height = `${baseHeight + 550}px`;
      } else {
        parentContainer.style.height = `${baseHeight}px`;
      }
    } else if (window.innerWidth < 1000) {
      if (containerClicked.classList.contains('open')) {
        parentContainer.style.height = `${baseHeight + 350}px`;
      } else {
        parentContainer.style.height = `${baseHeight}px`;
      }
    }
  }

  let isScrolling = false;

  window.addEventListener('scroll', () => {
    isScrolling = true;
    setTimeout(() => (isScrolling = false), 100);
  });

  function resetContainers() {
    if (isScrolling) return;
    let parentContainer = null;

    for (let i = 0; i < containers.length; i++) {
      const container = containers[i];
      if (container) {
        container.style.transform = 'translateX(0)';
        container.style.opacity = '1';
        container.classList.remove('open');
        container.style.transition = 'all 1.7s'

        if (!parentContainer) {
          parentContainer = container.closest('.team-section');
        }
      }
    }

    if (parentContainer) {
      if (parentContainer.dataset.baseHeight) {
        parentContainer.style.height = parentContainer.dataset.baseHeight;
      }
    }
  }

  containers.forEach((container, i) => {
    container.addEventListener('click', () => {
      if (container.classList.contains('open') == false) {
        resetContainers(0, 3);
      }
    });
  });

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
          container.style.transform = `translateX(-${indexInRow * 460}px)`;
        } else if (i < indexInRow + startIndex) {
          container.style.transform = 'translateX(-100%)';
          container.style.opacity = '0';
        } else if (i > indexInRow + startIndex) {
          container.style.transform = `translateX(${(i - indexInRow) * 460}px)`;
          container.style.opacity = '0';
        }
      });

      activeContainer = containerClicked;
    }
  }

  function handleClickForTwo(containerClicked, startIndex, indexInRow, numContainersInRow) {
    if (activeContainer === containerClicked) {
      adjustContainerHeight(containerClicked, numContainersInRow);
      resetContainers(startIndex, 2);
      activeContainer = null;
    } else {
      resetContainers(startIndex, 2);
      containerClicked.classList.add('open');
      adjustContainerHeight(containerClicked, numContainersInRow);

      containers.forEach((container, i) => {
        if (i < startIndex || i >= startIndex + 2) return;

        if (container === containerClicked) {
          if (window.innerWidth < 1000) {
            const containerRect = container.getBoundingClientRect();
            const offset = window.innerWidth / 2 - (containerRect.left + containerRect.width / 2);
            container.style.transform = `translateX(${offset}px)`;
          } else if (indexInRow === 0) {
            container.style.transform = 'translateX(-100px)';
          } else if (window.innerWidth < 1210) {
            container.style.transform = 'translateX(-500px)';
          } else {
            container.style.transform = `translateX(-${indexInRow * 560}px)`;
          }

          if (window.innerWidth < 1000) {
            const expandedDescription = containerClicked.querySelector('.team-section__description-container');
            setTimeout(() => {
              const descriptionHeight = expandedDescription
                ? expandedDescription.scrollHeight
                : 0;

              for (let j = startIndex + 2; j < containers.length; j++) {
                containers[j].style.transform = `translateY(${descriptionHeight + 50}px)`;
              }
            }, 300);
          }

        } else if (i !== indexInRow + startIndex) {
          container.style.transform = 'translateX(460px)';
          container.style.opacity = '0';
        }
      });

      activeContainer = containerClicked;
    }
  }

  function handleClickForOne(containerClicked, startIndex, numContainersInRow) {
    if (activeContainer === containerClicked) {
      containerClicked.classList.remove('open');
      resetContainers(startIndex, 1);
      activeContainer = null;
    } else {
      resetContainers(startIndex, 1);
      containerClicked.classList.add('open');
      adjustContainerHeight(containerClicked, numContainersInRow);

      containers.forEach((container, i) => {
        if (i < startIndex || i >= startIndex + 1) return;

        if (container === containerClicked) {
          if (window.innerWidth < 640) {
            const expandedDescription = containerClicked.querySelector('.team-section__description-container');
            setTimeout(() => {
              const descriptionHeight = expandedDescription
                ? expandedDescription.scrollHeight
                : 0;

              for (let j = startIndex + 1; j < containers.length; j++) {
                containers[j].style.transform = `translateY(${descriptionHeight + 120}px)`;
              }
            }, 300);
          }
        }
      });

      activeContainer = containerClicked;
    }
  }

  function updateLayout() {
    resetContainers(0, containers.length);
    activeContainer = null;
  }

  let resizeTimeout;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerHeight !== document.documentElement.clientHeight) {
        return;
      }
      updateLayout();
    }, 100);
  });

  containers.forEach((container, index) => {
    container.addEventListener('click', function () {
      const screenWidth = window.innerWidth;
      let numContainersInRow;

      if (screenWidth > 1460) {
        numContainersInRow = 3;
      } else if (screenWidth >= 641) {
        numContainersInRow = 2;
      } else {
        numContainersInRow = 1;
      }

      const startOfRow = Math.floor(index / numContainersInRow) * numContainersInRow;
      const indexInRow = index % numContainersInRow;

      if (numContainersInRow === 3) {
        handleClickForThree(container, startOfRow, indexInRow);
      } else if (numContainersInRow === 2) {
        handleClickForTwo(container, startOfRow, indexInRow, numContainersInRow);
      } else {
        handleClickForOne(container, startOfRow, numContainersInRow);
      }
    });
  });

  // window.addEventListener('resize', updateLayout);
});

const container = document.querySelector('.history-section__image-container');
