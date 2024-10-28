// Carousel Functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

// Automatically cycle through slides every 5 seconds
setInterval(nextSlide, 5000);

// Existing JavaScript code...

// Automatic Top Deals Slider
const deals = document.querySelectorAll('.top-deal');
let currentDeal = 0;

function showNextDeal() {
    deals[currentDeal].classList.remove('active'); // Hide the current deal
    currentDeal = (currentDeal + 1) % deals.length; // Move to the next deal
    deals[currentDeal].classList.add('active'); // Show the next deal
}

// Change deal every 5 seconds
setInterval(showNextDeal, 5000);

// Automatic Banner Slider
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize the slider
showSlides();

