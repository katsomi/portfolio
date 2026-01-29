// Create an array of CSS file paths
const cssFiles = [
  'style.css',
  'utils.css',
  'header.css',
  'mobileNav.css',
  'about.css',
  'latest.css',
  'projects.css',
  'contact.css'
];

// Dynamically import CSS files
cssFiles.forEach(file => {
  const link = document.createElement('link');
  link.href = file;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
});

//toggle theme
const themeBtn = document.querySelectorAll('#theme-toggle');

themeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  })
})

//display mobile menu
const mobileMenu = document.querySelector('.mobileNav');
const showMenu = document.querySelector('.threeBars');
const mobileMenuLinks = document.querySelectorAll('.mobileNav__menu__item');
let isMobileNav = false;

showMenu.addEventListener('click', () => {
  if (isMobileNav) {
    mobileMenu.classList.add("display-none")
    mobileMenu.classList.remove("display-flex")
    document.body.style.overflowY = 'auto';  
  } else {
    mobileMenu.classList.add("display-flex");
    mobileMenu.classList.remove("display-none")
    document.body.style.overflowY = 'hidden';
  }
  isMobileNav = !isMobileNav;
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    isMobileNav = false;
    mobileMenu.classList.add("display-none")
    mobileMenu.classList.remove("display-flex")
    document.body.style.overflowY = 'auto';
  })
})