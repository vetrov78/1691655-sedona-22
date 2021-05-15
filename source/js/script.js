var navMain = document.querySelector(".main-navigation")
var navToggle = document.querySelector(".main-navigation__toggle");

navMain.classList.remove("main-navigation--nojs");
navMain.classList.remove("main-navigation--opened");
navMain.classList.add("main-navigation--closed");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.add("main-navigation--opened");
    navMain.classList.remove("main-navigation--closed");
  } else {
    navMain.classList.remove("main-navigation--opened");
    navMain.classList.add("main-navigation--closed");
  }
});
