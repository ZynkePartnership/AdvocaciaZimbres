const navbarToggle = document.querySelector(".nav-content-btn");
const navbarCollapse = document.querySelector("nav");
const iconBarAnim = document.querySelector("icon-bar");

navbarToggle.addEventListener("click", showBtn);

function showBtn(){
    navbarCollapse.classList.toggle("show");
    iconBarAnim.classList.toggle("anim");
}
