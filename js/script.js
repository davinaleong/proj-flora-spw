const body = document.querySelector("body");

const mainHeader = document.getElementById("mainHeader");
const toggleNav = document.getElementById("toggleNav");
const classExpanded = "expanded";

const copyright = document.getElementById("copyright");

const createdDate = new Date("2022-03-23");
const now = new Date();

// Nav toggle
toggleNav.addEventListener("click", (e) => {
  mainHeader.classList.toggle(classExpanded);
});

// Print copyright
let dateText = now.getFullYear();
if (now.getFullYear() !== createdDate.getFullYear()) {
  dateText = `${createdDate.getFullYear()} - ${now.getFullYear()}`;
}
copyright.innerText = `Handcrafted by Davina Leong, ${dateText}.`;
