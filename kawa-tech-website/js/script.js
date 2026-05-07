const observer = new IntersectionObserver( // Observa os elementos e adiciona a classe "visible" e remove a classe "hidden" quando eles entram na viewport
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { // Verifica se o elemento está visível na viewport
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

function scrollReveal(selector) {
  document.querySelectorAll(selector).forEach((card) => {
    if (card.getBoundingClientRect().top < window.innerHeight) {
    } else {
      card.classList.add("hidden");
      observer.observe(card);
    }
  });
}

scrollReveal(".team-member");
scrollReveal(".second-section-card");
scrollReveal(".third-section-card");
scrollReveal(".methodology-card");
scrollReveal(".differences-card");
