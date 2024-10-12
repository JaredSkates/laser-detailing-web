// Image Slider -> About Section
let currentIndex = 0;
const images = [
    "assets/IMG_0239.jpg",
    "assets/IMG_0246.jpg",
    "assets/IMG_0250.jpg"
];

const sliderImage = document.getElementById('sliding-images');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Function to change image
function changeImage(index) {
    sliderImage.src = images[index]; // Changes the src directory
}

// Left arrow event listener (previous image)
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    changeImage(currentIndex);
});

// Right arrow event listener (next image)
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    changeImage(currentIndex);
});