function flipCardMobile() {
  console.log("flipCardMobile"); // Debug en producción
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach((card) => {
    if (card.dataset.initialized) return;
    card.dataset.initialized = "true";

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

  if (!document.body.dataset.cardGlobal) {
    document.body.dataset.cardGlobal = "true";

    document.addEventListener("click", () => {
      cards.forEach((card) => card.classList.remove("flipped"));
    });
  }
}

document.addEventListener("DOMContentLoaded", flipCardMobile);
document.addEventListener("astro:page-load", flipCardMobile);
