const menuMobile = document.getElementById('menu-mobile');
const navList = document.querySelector('.nav__list');
const bars = document.querySelector('.fa-bars');
const navLogo = document.querySelector('.nav__logo');
var navbar = document.querySelector('.nav');
var navLink = document.getElementsByClassName('nav__link');


//Eventos
menuMobile.addEventListener('click', ativarNavbar);
menuMobile.addEventListener('click', mudarIcone);
window.addEventListener('scroll', stickyNav);


function ativarNavbar() {
    navList.classList.toggle('hidden');
};

function mudarIcone() {
    bars.classList.toggle('fa-times');
};

function stickyNav() {
    navbar.classList.toggle('sticky', window.scrollY > 10);
    if(window.scrollY > 10) {
        navLogo.style.color = '#292929';
        menuMobile.style.color = '#292929';

        for(var i = 0; i < navLink.length; i++) {
            navLink[i].style.color = '#292929';
        }
    } else {
        navLogo.style.color = '';
        menuMobile.style.color = '';
        for(var i = 0; i < navLink.length; i++) {
            navLink[i].style.color = '';
        }
    }
};








   
    
    