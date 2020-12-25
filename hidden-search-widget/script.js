const search = document.querySelector(".search-container");
const input = document.querySelector(".input-bar");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
