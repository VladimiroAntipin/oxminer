const hamburger = document.getElementsByClassName('header__hamburger')[0];
const navMenu = document.getElementsByClassName('header__navcontainer')[0];
const navLink = document.getElementsByClassName("header__link")[0];

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    hamburger.classList.toggle('active')
});

document.querySelectorAll(".header__link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove('active')
    hamburger.classList.remove('active')
}));