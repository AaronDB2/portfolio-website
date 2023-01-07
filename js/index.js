// Select elements
const slideshowImagesDiv = document.querySelector(".slideshow__images");

// Global vars
let currentSlideshow = 0; // Current active slideshow image
const slideshowImages = slideshowImagesDiv.children; // Get all slideshow children

// Set first image in slideshow to display block
function initSlideshow() {
  slideshowImagesDiv.firstElementChild.style.display = "block";
}

// Show next slideshow image
function nextSlideshow() {
  showSlideshowImage(currentSlideshow + 1);
}

// Show previous slideshow image
function prevSlideshow() {
  showSlideshowImage(currentSlideshow - 1);
}

// Handles slideshow displaying slideshowImages
function showSlideshowImage(index) {
  // Set current slideshow to display none
  slideshowImages[currentSlideshow].style.display = "none";

  console.log(index);
  console.log(currentSlideshow);
  if (index === slideshowImages.length) {
    index = 0;
    slideshowImages[0].style.display = "block";
  } else if (index < 0) {
    index = slideshowImages.length - 1;
    slideshowImages[index].style.display = "block";
  } else {
    // Display image on index
    slideshowImages[index].style.display = "block";
  }

  // Set current index
  currentSlideshow = index;
}

// Run at start
// ------------------------------------------------------------------------------------------
initSlideshow();
