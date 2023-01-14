// Takes in a subject and a display element and set based on the subject the display to none or flex
function showDisplay(subject, displayElement) {
  // Get displayElement children
  const displayChildren = Array.from(displayElement.children);

  displayChildren.forEach((display) => {
    if (display.dataset.subject === subject) {
      display.style.display = "flex";
    } else {
      display.style.display = "none";
    }
  });
}

export { showDisplay };
