const toggleMenu = document.querySelector('.toggle_menu');
const nav = document.querySelector('.nav');
toggleMenu.addEventListener('click', function (){
    nav.classList.toggle('d-block');
});