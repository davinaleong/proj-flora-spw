// console.log("Script loaded.");
const mainHeader = document.getElementById("mainHeader");
const toggleNav = document.getElementById("toggleNav");
const classExpanded = "expanded";

toggleNav.addEventListener("click", (e) => {
  mainHeader.classList.toggle(classExpanded);
});
