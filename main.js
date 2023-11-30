const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
//};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));