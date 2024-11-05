const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-icn");
const menu = document.getElementById("dropdown-menu");

hamburger.addEventListener('click', () => {
    closeMenu.style.display = "block";
    hamburger.style.display = "none";
    menu.style.display = "block"
});
closeMenu.addEventListener('click', () => {
    hamburger.style.display = "block";
    closeMenu.style.display = "none";
    menu.style.display = "none"
});

function mainPage() {
    window.location.href = "index.html"
}