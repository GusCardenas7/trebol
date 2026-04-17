document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  function closeAll() {
    items.forEach((item) => {
      const content = item.querySelector(".accordion-content");
      const plus = item.querySelector(".accordion-icon-plus");
      const minus = item.querySelector(".accordion-icon-minus");

      content.style.maxHeight = "0px";
      content.style.marginTop = "0";
      plus.style.opacity = "1";
      minus.style.opacity = "0";
      item.classList.remove("active");
    });
  }

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      const content = item.querySelector(".accordion-content");
      const plus = item.querySelector(".accordion-icon-plus");
      const minus = item.querySelector(".accordion-icon-minus");

      const isOpen =
        content.style.maxHeight && content.style.maxHeight !== "0px";

      closeAll();

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.marginTop = "0.5rem";
        plus.style.opacity = "0";
        minus.style.opacity = "1";
        item.classList.add("active");
      }
    });
  });

  document.addEventListener("click", () => {
    closeAll();
  });
});
