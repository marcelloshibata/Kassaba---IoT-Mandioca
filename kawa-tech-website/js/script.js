const observer = new IntersectionObserver( // Observa os elementos e adiciona a classe "visible" e remove a classe "hidden" quando eles entram na viewport
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15, // O elemento é considerado visível quando 15% dele está na viewport
    rootMargin: "0px 0px -50px 0px", // Adiciona uma margem inferior para que o elemento seja considerado visível um pouco antes de entrar completamente na viewport
  },
);

const secondSectionCards = document.querySelectorAll(".second-section-card");
secondSectionCards.forEach((card) => {
    if (card.getBoundingClientRect().top < window.innerHeight) { // Verifica se o card já está visível na tela
    } else {
         card.classList.add("hidden");
         observer.observe(card); // Começa a observar cada card para aplicar a animação quando eles entrarem na viewport
    }
});

const thirdSectionCards = document.querySelectorAll(".third-section-card");
thirdSectionCards.forEach((card) => {
  if (card.getBoundingClientRect().top < window.innerHeight) {    
    } else {
         card.classList.add("hidden");
         observer.observe(card);
    }
});

const methodologyCards = document.querySelectorAll(".methodology-card");
methodologyCards.forEach((card) => {
  if (card.getBoundingClientRect().top < window.innerHeight) {    
    } else {
         card.classList.add("hidden");
         observer.observe(card);
    }
});

const differencesCards = document.querySelectorAll(".differences-card");
differencesCards.forEach((card) => {
  if (card.getBoundingClientRect().top < window.innerHeight) {    
    } else {
         card.classList.add("hidden");
         observer.observe(card);
    }
});

