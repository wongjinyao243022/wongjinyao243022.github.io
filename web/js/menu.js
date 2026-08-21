

const menuToggle =
    document.getElementById("menu-toggle-burger");

const laptopMenu =
    document.getElementById("laptop-menu");

const closeMenu =
    document.getElementById("close-menu");


menuToggle.addEventListener("click", function () {

    laptopMenu.classList.add("active");

});




closeMenu.addEventListener("click", function () {

    laptopMenu.classList.remove("active");

});



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

