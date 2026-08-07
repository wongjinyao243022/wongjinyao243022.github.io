const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const laptopMenu = document.getElementById('laptop-menu');

menuToggle.addEventListener('click', () => {
    laptopMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    laptopMenu.classList.remove('active');
});
