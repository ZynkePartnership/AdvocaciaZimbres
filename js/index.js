const navbarToggle = document.getElementsByClassName("nav-content-btn");
const navbarCollapse = document.getElementsByClassName("nav-content");

navbarToggle.addEventListener('click', function(){
    navbarCollapse.classList.toggle('show');
})