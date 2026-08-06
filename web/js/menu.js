const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("laptop-menu");
const closeButton = document.getElementById("close-menu");

toggleButton.addEventListener("click", () => {
    menu.classList.add("active");
});

closeButton.addEventListener("click", () => {
    menu.classList.remove("active");
});