// JavaScript for animation

// You can use libraries like GSAP or CSS animations for more complex animations
// Below is just a simple example using CSS animations

const animatedImages = document.querySelectorAll('.animated-image');

animatedImages.forEach((image, index) => {
  // Adjust animation timing for each image
  image.style.animation = `animateImage 4s ease-in-out ${index * 0.5}s infinite alternate`;
});
