const btnMenu = document.getElementById("menu");
const navbar = document.querySelector(".header__nav");
btnMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar.classList.toggle("header__nav--active");
});
