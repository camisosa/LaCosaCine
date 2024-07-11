document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const slideContainer = document.querySelector(".slides");
  let currentSlide = 0;
  const slideWidth = slides[0].clientWidth;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slideContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
  }

  setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const articles = Array.from(document.querySelectorAll('.article'));

  // Función para actualizar la visibilidad de los artículos
  const updateArticles = () => {
      const activeCategories = Array.from(filterButtons)
          .filter(btn => btn.classList.contains('selected'))
          .map(btn => btn.dataset.category);

      // Filtrar artículos de las categorías activas
      const filteredArticles = articles.filter(article =>
          activeCategories.includes(article.dataset.category)
      );

      // Ocultar todos los artículos
      articles.forEach(article => {
          article.style.display = 'none';
      });

      // Mostrar los primeros 12 artículos filtrados
      filteredArticles.slice(0, 12).forEach(article => {
          article.style.display = 'block';
      });
  };

  
  filterButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const selectedCount = Array.from(filterButtons)
              .filter(btn => btn.classList.contains('selected')).length;

          if (button.classList.contains('selected') && selectedCount <= 3) {
              alert('Debe haber al menos 3 categorías seleccionadas.');
              return; 
          }

          button.classList.toggle('selected');
          updateArticles();
      });
      if (index < 4) {
          button.classList.add('selected');
      }
  });
  updateArticles();
});
