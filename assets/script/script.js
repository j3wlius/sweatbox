'use strict';

/* navbar toggle */
const navbar = document.querySelector('.navbar');
const navOpenBtn = document.querySelector('.nav-open-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const navLinks = document.querySelectorAll('.navbar-link');

const hamToggleBtns = [navOpenBtn, navCloseBtn];

for (let hamToggleBtn of hamToggleBtns) {
  hamToggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

/* remove active class from navbar on navlink click */
for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
}

/* navOpenBtn.addEventListener('click', () => {
  navbar.classList.add('active');
});
*/

// console.log(navbar)

/* get current year */
const currentDate = new Date();
document.querySelector('.year').innerText = currentDate.getFullYear();


/* add active class on header and back to top btn on scroll */
const header = document.querySelector('.header')
const backTopBtn = document.querySelector('.back-top-btn')
window.addEventListener('scroll', () => {
  if(window.scrollY >= 100){
    header.classList.add('active');
    backTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    backTopBtn.classList.remove('active');
  }
})