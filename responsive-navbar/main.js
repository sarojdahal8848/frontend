const menuToggle = document.querySelector('.menu-toggle')
menuToggle.onclick = function(){
    navBar = document.querySelector('.nav-links')
    navBar.classList.toggle('active')
}