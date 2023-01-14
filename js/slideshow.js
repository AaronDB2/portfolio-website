// Set first image in slideshow to display block
function initSlideshow() {
  const slideshowImagesDivs = document.querySelectorAll(".slideshow__images");
  slideshowImagesDivs.forEach((container) => {
    container.firstElementChild.style.display = "block";
  });
  window.nextSlideshow = nextSlideshow;
}

// Shows next slideshow image
function nextSlideshow(e, indexValue) {
  const slideshowImages = e.target.parentElement.firstElementChild.children;

  // Get currentIndex from slideshow
  const currentIndex = parseInt(
    e.target.parentElement.firstElementChild.dataset.currentIndex
  );
  // Set currentIndex on slideshow
  e.target.parentElement.firstElementChild.dataset.currentIndex =
    showSlideshowImage(
      currentIndex + indexValue,
      currentIndex,
      slideshowImages
    );
}

// Handles slideshow displaying slideshowImages and updates currentIndex on slideshow
function showSlideshowImage(index, currentIndex, images) {
  // Set current slideshow to display none
  images[currentIndex].style.display = "none";
  if (index === images.length) {
    images[0].style.display = "block";
    return 0;
  } else if (index < 0) {
    index = images.length - 1;
    images[index].style.display = "block";
    return index;
  } else {
    images[index].style.display = "block";
    return index;
  }
}

export { initSlideshow, nextSlideshow, showSlideshowImage };
