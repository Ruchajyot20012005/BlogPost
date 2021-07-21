let themeSwitch = document.querySelector(".themeSwitch");
let body = document.querySelector("body");
themeSwitch.onclick = function () {
  themeSwitch.classList.toggle("active");
  body.classList.toggle("light");
};

let menutoggle = document.querySelector(".toggle");
let menu = document.querySelector(".inner-menu");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  menu.classList.toggle("active");
};
