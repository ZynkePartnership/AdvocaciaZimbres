const navbarToggle = document.querySelector(".nav-content-btn");
const navbarCollapse = document.querySelector("nav");

navbarToggle.addEventListener("click", showBtn);

function showBtn(){
    navbarCollapse.classList.toggle("show");
}