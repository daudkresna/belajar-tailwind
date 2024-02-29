//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Button Review
// function btnClick() {
//   const btn1 = document.querySelector('#btn1');
//   btn1.classList.toggle('button-active');
// };

//Fixed Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("review");
  var btn = document.getElementsByClassName("btn-review");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    
    x[i].classList.add("hidden");
  }
  for (i = 0; i < x.length; i++) {
    btn[i].classList.remove("scale-150");
  }

  x[slideIndex - 1].classList.remove("hidden");
  x[slideIndex - 1].classList.add("block");
  btn[slideIndex - 1].classList.add("scale-150");
}
