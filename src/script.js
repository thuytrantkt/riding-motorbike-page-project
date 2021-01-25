// DOM references
const btnApply = document.querySelector(".btn-apply");
const navMenu = document.querySelector(".nav-menu");
const navContainer = document.querySelector("nav");
const header = document.querySelector("#header");
const tipsLink = document.querySelector(".tips-link");
const helmetLink = document.querySelector(".helmet-link");

// Functions
function applyNow() {
  const firstName = prompt("What is your first name?");
  const age = prompt("How old are you?");
  if (age >= 16) {
    alert(`🎉 Congrats! 🎉 You can apply now, ${firstName}`);
  } else {
    alert(`Sorry! You cannot apply, ${firstName}😢`);
  }
}

const scrollToSec = function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href").slice(1);
  const element = document.getElementById(id);

  const headerHeight = header.getBoundingClientRect().height;
  const navContainerHeight = navContainer.getBoundingClientRect().height;

  let position = element.offsetTop - headerHeight * 2;

  if (headerHeight > 161) {
    position = position + navContainerHeight;
  }
  window.scrollTo({
    left: 0,
    top: position,
    behavior: "smooth",
  });
};

// Events
btnApply.addEventListener("click", applyNow);
navMenu.addEventListener("click", scrollToSec);
tipsLink.addEventListener("click", scrollToSec);
helmetLink.addEventListener("click", scrollToSec);
