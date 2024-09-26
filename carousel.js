const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const items = document.querySelectorAll('.contanier-projects-single');

let currentIndex = 0;

function showSlide(index) {
  // Impede o índice de sair dos limites
  if (index < 0) {
    currentIndex = items.length - 1;
  } else if (index >= items.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Ajusta a visibilidade dos slides
  const offset = -currentIndex * 100; // Move o carousel horizontalmente
  document.querySelector('.carousel-content').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// (Opcional) Auto slide
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000); // Muda de slide a cada 3 segundos
