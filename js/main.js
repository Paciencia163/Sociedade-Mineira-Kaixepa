const preloader = document.getElementById("preloader");
preloader.style.display = "flex"; // Show the preloader

// Hide the preloader once the page has fully loaded
window.addEventListener("load", () => {
    preloader.classList.add("preloader_hidden");

    preloader.addEventListener("transitionend", () => {
        document.body.removeChild(preloader); // Correct way to remove the loader
    });
});



// sticky Navigation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });



  // Ham Menu
const hamMenu = document.querySelector(".menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});



//Hero Section
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var currentSlide = 0;

const sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    currentSlide = manual !== undefined ? manual : currentSlide; // Update currentSlide if manual is defined

    btns[currentSlide].classList.add("active");
    slides[currentSlide].classList.add("active");
    contents[currentSlide].classList.add("active");
};




// Navigation buttons
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Automatic slider
const autoSlider = () => {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    sliderNav();
};

// Set interval for automatic sliding
setInterval(autoSlider, 7000); // Change slide every 5 seconds




// Counter
const counters = document.querySelectorAll('.counter');

// Function to animate the counter
const animateCounter = (counter, target) => {
    let count = 0; // Starting number
    const increment = Math.ceil(target / 100); // Increment value
    const interval = setInterval(() => {
        count += increment;
        if (count > target) {
            count = target; // Ensure we don't exceed the target
            clearInterval(interval); // Stop counting
        }
        counter.querySelector('.number_counter').textContent = count; // Update the displayed number
    }, 50); // Adjust timing as necessary
};

// Observer callback to start counting
const startCounting = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target, 10); // Get target from data attribute
            animateCounter(entry.target, target); // Start animation
            observer.unobserve(entry.target); // Stop observing this element
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(startCounting, {
    threshold: 1.0 // Trigger when the entire element is visible
});

// Observe each counter element
counters.forEach(counter => {
    observer.observe(counter);
});

// Projects
function filterProjects(category, buttonId) {
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Show or hide projects based on selected category
    projectCards.forEach((card) => {
      const projectCategory = card.getAttribute('data-category');

      if (category === 'All' || projectCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Remove active class from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add active class to the clicked button
    document.getElementById(buttonId).classList.add('active');
  }

  // Default to showing all projects on page load
  filterProjects('All', 'all');



