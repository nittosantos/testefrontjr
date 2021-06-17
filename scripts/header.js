const btnMobile = document.querySelector("[data = menu]");

function toggleMenu() {
  const nav = document.querySelector("[data = nav]");
  nav.classList.add("active");
}

const btnClose = document.querySelector("[data=close]");

function closeMenu() {
  const nav = document.querySelector("[data = nav]");
  nav.classList.remove("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", closeMenu);
