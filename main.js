const menuBtn = document.querySelector('.menu-btn');
const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.navbar-right');

// burger menu action
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// sticky navigation menu
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    // header.classList.add('sticky');
    navbar.classList.add('sticky');
  } else {
    // header.classList.remove('sticky');
    navbar.classList.remove('sticky');
  }
};

// open menu on click
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbarMenu.classList.toggle('show-menu');
});
