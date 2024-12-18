//Footer modal form 
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalFooterButton = document.querySelector(".prefooter__button");
    const openModalPreferenceButton = document.querySelector(".preference-section__btn");
    const closeModalButton = document.getElementById("closeModal");

    openModalFooterButton.addEventListener("click", () => {
        modal.classList.add("visible");
    });

    openModalPreferenceButton.addEventListener("click", () => {
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