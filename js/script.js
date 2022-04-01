const classExpanded = "expanded";
const classHidden = "hidden";

window.onload = () => {
  const main = document.querySelector("main");
  const mainHeader = document.getElementById("mainHeader");
  const toggleNav = document.getElementById("toggleNav");

  const categoryButtons = document.querySelectorAll(
    "button[data-click=modalTrigger]"
  );

  const closeButtons = document.querySelectorAll(".close");

  // Collapse nav when main is clicked
  main.addEventListener("click", (e) => {
    mainHeader.classList.remove(classExpanded);
  });

  // Toggle nav when toggle is clicked
  toggleNav.addEventListener("click", (e) => {
    mainHeader.classList.toggle(classExpanded);
  });

  printCopyright();
  hideModals();

  categoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => showSingleModal(e.target));
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => hideSingleModal(e.target));
  });
};

// Show copyright with year on footer
const printCopyright = () => {
  const copyright = document.getElementById("copyright");
  const createdDate = new Date("2022-03-23");
  const now = new Date();

  let dateText = now.getFullYear();
  if (now.getFullYear() !== createdDate.getFullYear()) {
    dateText = `${createdDate.getFullYear()} - ${now.getFullYear()}`;
  }
  copyright.innerText = `Handcrafted by Davina Leong, ${dateText}`;
};

// Hide all modals
const hideModals = () => {
  const modals = document.querySelectorAll(".modal");

  modals.forEach((modal) => modal.classList.add(classHidden));
};

// Show modal when category is clicked
const showSingleModal = (target) => {
  const selector = target.dataset.target;
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.remove(classHidden);
  }
};

const hideSingleModal = (target) => {
  target.parentNode.parentNode.classList.add(classHidden);
};
