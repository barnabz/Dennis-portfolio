// Lapaulla Groceries screenshot gallery

const galleryButtons = document.querySelectorAll(".gallery-button");
const projectPreview = document.getElementById("project-preview");
const browserTitle = document.querySelector(".browser-bar > span:not(.browser-label)");
const browserNumber = document.querySelector(".browser-label");

galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const image = button.dataset.image;
        const title = button.dataset.title;
        const number = button.dataset.number;

        projectPreview.src = image;
        projectPreview.alt = title;

        if (browserTitle) browserTitle.textContent = title;
        if (browserNumber) browserNumber.textContent = number;

        galleryButtons.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
    });
});