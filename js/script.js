// console.log("Script loaded.");
const mainHeader = document.getElementById("mainHeader");
const toggleNav = document.getElementById("toggleNav");
const classExpanded = "expanded";

const copyright = document.getElementById("copyright");

const createdDate = new Date("2022-03-23");
const now = new Date();

toggleNav.addEventListener("click", (e) => {
  mainHeader.classList.toggle(classExpanded);
});

let dateText = now.getFullYear();
if (now.getFullYear() !== createdDate.getFullYear()) {
  dateText = `${createdDate.getFullYear()} - ${now.getFullYear()}`;
}
console.log(dateText);
copyright.innerText = `Handcrafted by Davina Leong, ${dateText}.`;
