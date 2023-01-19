import { showMobileNav } from "./mobileNav.js";
import { initSlideshow } from "./slideshow.js";
import { showDisplay } from "./showDisplay.js";

// Get elements
const hamburgerMenuIcon = document.querySelector(".fa-bars");
const mobileNav = document.querySelector(".mobile-nav");
const technologieSubjectBtns = document.querySelectorAll(
  ".skill__technologie-subject-item"
);
const technologieDisplay = document.querySelector(
  ".skill__technologie-display"
);

// Gets the subject from the clicked element and changes css classes of the element
// After that pass subject to showDisplay function
function clickSubject(e) {
  const subject = e.target.dataset.subject;

  // Loop trough all subjects and remove the active class
  technologieSubjectBtns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });

  // Set clicked element to active
  e.target.classList.add("active");

  // Display propper element based on subject
  showDisplay(subject, technologieDisplay);
}
window.clickSubject = clickSubject;

// Event Listeners
hamburgerMenuIcon.addEventListener("click", () => {
  showMobileNav(mobileNav);
});

Array.from(mobileNav.children[0].children).forEach((link) =>
  link.addEventListener("click", () => {
    showMobileNav(mobileNav);
  })
);

// Run at start
// ------------------------------------------------------------------------------------------
initSlideshow();
showDisplay("frontend", technologieDisplay);
