/* =========================================================
   BURGER MENU
========================================================= */

const menuToggle = document.getElementById("menu-toggle-burger");
const closeMenu = document.getElementById("close-menu");
const laptopMenu = document.getElementById("laptop-menu");


/* =========================================================
   OPEN MENU
========================================================= */

menuToggle.addEventListener("click", () => {

    laptopMenu.classList.add("active");

    document.body.classList.add("menu-open");

});


/* =========================================================
   CLOSE MENU
========================================================= */

closeMenu.addEventListener("click", () => {

    laptopMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

});


/* =========================================================
   OVERLAY DROPDOWN
========================================================= */

const overlayItems = document.querySelectorAll(".overlay-item");

overlayItems.forEach((item) => {

    const button = item.querySelector(".overlay-main-btn");

    button.addEventListener("click", () => {
        overlayItems.forEach((otherItem) => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

/* ================================
   OPEN LAPTOP MENU
================================ */

const menuToggle =
    document.getElementById("menu-toggle-burger");

const laptopMenu =
    document.getElementById("laptop-menu");

const closeMenu =
    document.getElementById("close-menu");


menuToggle.addEventListener("click", function () {

    laptopMenu.classList.add("active");

});


/* ================================
   CLOSE LAPTOP MENU
================================ */

closeMenu.addEventListener("click", function () {

    laptopMenu.classList.remove("active");

});


/* ================================
   EXPERTISE SUBMENU
================================ */

const mobileMenuLinks =
    document.querySelectorAll(".mobile-menu-link");


mobileMenuLinks.forEach(function (button) {

    button.addEventListener("click", function () {

        const submenu =
            button.nextElementSibling;

        const arrow =
            button.querySelector(".mobile-arrow p");


        submenu.classList.toggle("active");


        if (submenu.classList.contains("active")) {

            arrow.textContent = "⌃";

        } else {

            arrow.textContent = "⌄";

        }

    });

});
