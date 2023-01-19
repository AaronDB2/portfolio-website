function showMobileNav(mobileNavElement) {
  if (mobileNavElement.style.display === "block") {
    mobileNavElement.style.display = "none";
  } else {
    mobileNavElement.style.display = "block";
  }
}

export { showMobileNav };
