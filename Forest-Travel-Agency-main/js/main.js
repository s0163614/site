const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".headernav a");
console.log(navLinks);

navIcon.addEventListener("click", function () {
  this.classList.toggle("nav-icon--active");
  nav.classList.toggle("nav--active");
});

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    navIcon.classList.remove("nav-icon--active");
    nav.classList.remove("nav--active");
  });
});
