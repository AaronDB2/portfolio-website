function showMobileNav(mobileNavElement, navSocialIconsElement) {
  if (mobileNavElement.style.display === "block") {
    mobileNavElement.style.display = "none";
    navSocialIconsElement.style.display = "block";
  } else {
    mobileNavElement.style.display = "block";
    navSocialIconsElement.style.display = "none";
  }
}

export { showMobileNav };
