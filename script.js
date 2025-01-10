document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for links with data-scroll attribute
    const scrollLinks = document.querySelectorAll('[data-scroll]');
    
    scrollLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('data-scroll');
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Slider functionality
    let currentSlide = 0;
  
    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
  
    function showSlides(n) {
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
  
      if (n >= slides.length) {
        currentSlide = 0;
      } else if (n < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = n;
      }
  
      // Hide all slides and reset dots
      slides.forEach((slide) => {
        slide.classList.remove('show');
      });
      dots.forEach((dot) => {
        dot.classList.remove('active');
      });
  
      // Show the current slide and update dot
      slides[currentSlide].classList.add('show');
      dots[currentSlide].classList.add('active');
    }
  
    function moveSlide(direction) {
      showSlides(currentSlide + direction);
    }
  
    function setSlide(index) {
      showSlides(index);
    }
  
    showSlides(0); // Initialize the slider
  
    // Handle arrow clicks for navigating slides
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
  
    if (arrowLeft) {
      arrowLeft.addEventListener('click', () => {
        moveSlide(-1);
      });
    }
  
    if (arrowRight) {
      arrowRight.addEventListener('click', () => {
        moveSlide(1);
      });
    }
  
    // Handle dot click to navigate directly to a slide
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setSlide(index);
      });
    });
  
    // Resume link confirmation
    const resumeLink = document.querySelector('a.file');
    
    if (resumeLink) {
      resumeLink.addEventListener("click", event => {
        const userConfirmed = confirm("Do you want to leave the current page and open the resume?");
        if (!userConfirmed) {
          event.preventDefault();
        }
      });
    }
    // Linkedin link confirmation
    const linkedinLink = document.querySelector('a.linkedin');
    
    if (linkedinLink) {
        linkedinLink.addEventListener("click", event => {
        const userConfirmed = confirm("Do you want to leave the current page and open LinkedIn?");
        if (!userConfirmed) {
          event.preventDefault();
        }
      });
    }
  });