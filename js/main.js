const body = document.querySelector("body");
const burgerBtn = document.querySelector(".burger");
const burgerBtnIcon = document.querySelector(".burger-icon");
const navMenu = document.querySelector(".nav__list");

burgerBtn.addEventListener("click", ()=>{
    navMenu.classList.toggle("active");
    body.classList.toggle("stop-scrolling");
    burgerBtnIcon.src = `images/icon-close.svg`
})
