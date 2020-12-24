const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", toggleActive);
});

function toggleActive() {
  if (
    this.parentElement.querySelector(".active") &&
    this.parentElement.querySelector(".active") !== this
  ) {
    this.parentElement.querySelector(".active").classList.toggle("active");
  }
  this.classList.contains("active")
    ? this.classList.remove("active")
    : this.classList.add("active");
}
