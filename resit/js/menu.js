
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger-menu");
    const closeButton = document.querySelector("#close-menu");
    const overlayMenu = document.querySelector("#overlay-menu");

    if (!menuButton || !closeButton || !overlayMenu) {
        console.error("Overlay menu elements could not be found.");
        return;
    }

    function openMenu() {
        overlayMenu.classList.add("menu-open");
        overlayMenu.setAttribute("aria-hidden", "false");

        menuButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-is-open");

        closeButton.focus();
    }

    function closeMenu() {
        overlayMenu.classList.remove("menu-open");
        overlayMenu.setAttribute("aria-hidden", "true");

        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-is-open");

        menuButton.focus();
    }

    // Open menu
    menuButton.addEventListener("click", openMenu);

    // Close menu
    closeButton.addEventListener("click", closeMenu);

    // Close when clicking a navigation link
    overlayMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            overlayMenu.classList.remove("menu-open");
            overlayMenu.setAttribute("aria-hidden", "true");

            menuButton.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-is-open");
        });
    });

    // Close when pressing Escape
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            overlayMenu.classList.contains("menu-open")
        ) {
            closeMenu();
        }
    });
});
