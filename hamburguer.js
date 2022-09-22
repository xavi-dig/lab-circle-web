const hamburguer = document.querySelector(".hamburguer");
const movingBox = document.querySelector(".moving-box");

hamburguer.addEventListener("click", () => {
  movingBox.classList.toggle("active");
});
