document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();

      cards.forEach((c) => {
        if (c !== card) {
          c.classList.remove("flipped");
        }
      });

      card.classList.toggle("flipped");
    });
  });

  document.addEventListener("click", () => {
    cards.forEach((card) => card.classList.remove("flipped"));
  });
});
