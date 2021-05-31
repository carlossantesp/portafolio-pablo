const btnMenu = document.getElementById("menu");
const navbar = document.querySelector(".header__nav");
const links = document.querySelectorAll(".navbar__link");

btnMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar.classList.toggle("header__nav--active");
});

links.forEach((link) => {
  link.addEventListener("click", smoothScrollHandler);
});

function smoothScrollHandler(e) {
  e.preventDefault();
  clearLinksActive();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 70;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
  this.parentElement.classList.add("navbar__item--active");
}

function clearLinksActive() {
  btnMenu.classList.remove("active");
  navbar.classList.remove("header__nav--active");
  links.forEach((link) => {
    link.parentElement.classList.remove("navbar__item--active");
  });
}

function onTopHandler() {
  clearLinksActive();
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
