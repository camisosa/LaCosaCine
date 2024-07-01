document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const slideContainer = document.querySelector(".slides");
    let currentSlide = 0;
    const slideWidth = slides[0].clientWidth;
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      slideContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }
  
    setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)
  });
  