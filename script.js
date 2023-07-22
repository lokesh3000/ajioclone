// Get the slideshow elements
const slideshow = document.querySelector('.discount-slides');
const slideshowIndicators = document.querySelector('.slideshow-indicators');
const images = slideshow.querySelectorAll('img');

// Create indicators based on the number of images
for (let i = 0; i < images.length; i++) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  indicator.setAttribute('data-index', i);
  slideshowIndicators.appendChild(indicator);
}

// Set the first indicator as active
slideshowIndicators.firstElementChild.classList.add('active');

let currentIndex = 0;
let intervalId = null;

// Function to change the slide
function changeSlide(index) {
  currentIndex = index;

  // Clear active class from all indicators
  const indicators = slideshowIndicators.querySelectorAll('.indicator');
  indicators.forEach(indicator => {
    indicator.classList.remove('active');
  });

  // Add active class to the current indicator
  indicators[currentIndex].classList.add('active');

  // Hide all images except the current one
  images.forEach((image, i) => {
    if (i === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

// Function to handle the indicator click
function handleIndicatorClick(e) {
  if (e.target.classList.contains('indicator')) {
    const index = parseInt(e.target.getAttribute('data-index'));
    changeSlide(index);
    resetInterval();
  }
}

// Attach click event listener to slideshow indicators
slideshowIndicators.addEventListener('click', handleIndicatorClick);

// Function to reset the interval timer
function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 5000);
}

// Function to change to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  changeSlide(currentIndex);
}
// Function to set the banner height based on the aspect ratio of images
function setBannerHeight() {
  const banner = document.querySelector('.banner');
  const images = banner.querySelectorAll('img');
  let maxHeight = 0;
}

// Call the function after the page loads
window.addEventListener('load', setBannerHeight);


// Function to change to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeSlide(currentIndex);
}

// Attach click event listener to previous arrow
const prevArrow = document.querySelector('.arrow.prev');
prevArrow.addEventListener('click', prevSlide);

// Attach click event listener to next arrow
const nextArrow = document.querySelector('.arrow.next');
nextArrow.addEventListener('click', nextSlide);

// Initialize the slideshow
changeSlide(currentIndex);
resetInterval();
