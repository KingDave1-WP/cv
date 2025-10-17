document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const nav = document.querySelector("nav");

  if (menuIcon && nav) {
    menuIcon.addEventListener("click", function () {
      nav.classList.toggle("active");
      menuIcon.classList.toggle("bx-x"); 
    });
  } else {
    console.error('menu-icon or nav not found');
  }
});
