const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
const selectedTagsContainer = document.querySelector('.filter-section__selected-tags');
const clearAllButton = document.querySelector('.filter-section__selected-button--clear');
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownContents = document.querySelectorAll('.dropdown-content');
const filterSection = document.querySelector('.filter-section');
const selectedContainer = document.querySelector('.filter-section__selected-container');

let originalHeight = filterSection.offsetHeight;

function updateFilterSectionHeight() {
    const visibleDropdown = document.querySelector('.dropdown-content.visible');
    const selectedContainerHeight = selectedContainer.offsetHeight;

    if (visibleDropdown) {
        const dropdownHeight = visibleDropdown.scrollHeight;
        filterSection.style.height = `${originalHeight + dropdownHeight + selectedContainerHeight}px`;
    } else {
        filterSection.style.height = `${originalHeight + selectedContainerHeight}px`;
    }
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        const value = event.target.value;

        if (event.target.checked) {
            const tag = document.createElement('div');
            tag.className = 'selected-tag';
            tag.dataset.value = value;
            tag.innerHTML = `
                <span>${value}</span>
                <button class="remove-tag" aria-label="Remove ${value}">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="white"/>
                    <path d="M10.5755 9.99093L13.8827 6.6838C13.948 6.60749 13.9822 6.50932 13.9783 6.40892C13.9744 6.30852 13.9328 6.21328 13.8618 6.14223C13.7907 6.07118 13.6955 6.02956 13.5951 6.02568C13.4947 6.02181 13.3965 6.05596 13.3202 6.12131L10.0131 9.42844L6.70592 6.11732C6.6308 6.0422 6.52892 6 6.42268 6C6.31645 6 6.21456 6.0422 6.13944 6.11732C6.06432 6.19244 6.02212 6.29433 6.02212 6.40056C6.02212 6.5068 6.06432 6.60868 6.13944 6.6838L9.45056 9.99093L6.13944 13.2981C6.09768 13.3338 6.06377 13.3778 6.03982 13.4273C6.01588 13.4768 6.00242 13.5307 6.0003 13.5857C5.99818 13.6406 6.00743 13.6954 6.02749 13.7466C6.04754 13.7978 6.07797 13.8443 6.11684 13.8832C6.15572 13.922 6.20222 13.9525 6.25341 13.9725C6.3046 13.9926 6.35939 14.0018 6.41433 13.9997C6.46927 13.9976 6.52318 13.9841 6.57267 13.9602C6.62216 13.9362 6.66617 13.9023 6.70193 13.8606L10.0131 10.5534L13.3202 13.8606C13.3965 13.9259 13.4947 13.9601 13.5951 13.9562C13.6955 13.9523 13.7907 13.9107 13.8618 13.8396C13.9328 13.7686 13.9744 13.6734 13.9783 13.5729C13.9822 13.4725 13.948 13.3744 13.8827 13.2981L10.5755 9.99093Z" fill="white" stroke="white" stroke-width="0.5"/>
                </svg>
                </button>
            `;

            tag.querySelector('.remove-tag').addEventListener('click', () => {
                checkbox.checked = false;
                tag.remove();
                updateFilterSectionHeight();
            });

            selectedTagsContainer.appendChild(tag);
        } else {
            const tagToRemove = document.querySelector(`.selected-tag[data-value="${value}"]`);
            if (tagToRemove) tagToRemove.remove();
        }
    });
});

clearAllButton.addEventListener('click', () => {
    selectedTagsContainer.innerHTML = '';
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    updateFilterSectionHeight();
});

dropdownButtons.forEach((dropdownButton) => {
    dropdownButton.addEventListener('click', (event) => {
        const dropdownContent = dropdownButton.nextElementSibling;

        if (!dropdownContent.classList.contains('visible')) {
            dropdownContents.forEach((content) => {
                content.classList.remove('visible');
            });
            dropdownContent.classList.add('visible');
        } else {
            dropdownContent.classList.remove('visible');
        }

        updateFilterSectionHeight();
        event.stopPropagation(); 
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-content') && !event.target.closest('.dropdown-button')) {
        dropdownContents.forEach((dropdownContent) => dropdownContent.classList.remove('visible'));
        updateFilterSectionHeight();
    }
});

dropdownContents.forEach((dropdownContent) => {
    dropdownContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

new ResizeObserver(updateFilterSectionHeight).observe(selectedContainer);


