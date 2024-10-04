// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Wallpaper Carousel Implementation
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideIntervalTime = 5000; // 5 seconds
    let slideInterval;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Initialize the first slide
    slides[currentSlide].classList.add('active');
    startSlideShow();

    // Optional: Pause carousel on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopSlideShow);
    carousel.addEventListener('mouseleave', startSlideShow);

    // Optional: Initialize Animate.css animations on page load
    // If you want to trigger animations manually, you can use JavaScript
});
