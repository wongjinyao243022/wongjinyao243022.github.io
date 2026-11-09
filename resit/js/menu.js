// The same menu button is used on all four pages.
const menuButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function closeMenu() {
    mobileMenu.classList.remove("active");
    menuButton.innerHTML = "&#9776;";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuButton.innerHTML = "&times;";
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation");
    } else {
        closeMenu();
    }
});

// Close the menu after choosing a page or pressing Escape.
mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileMenu.classList.contains("active")) {
        closeMenu();
        menuButton.focus();
    }
});

// The Tours page also has questions that open and close.
//document.querySelectorAll(".faq-question").forEach(function (question) {
//     question.addEventListener("click", function () {
//         const item = question.parentElement;
//         item.classList.toggle("active");

//         if (item.classList.contains("active")) {
//             question.setAttribute("aria-expanded", "true");
//         } else {
//             question.setAttribute("aria-expanded", "false");
//         }
//     });
// });
