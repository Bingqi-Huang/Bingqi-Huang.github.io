"use strict";
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector("span").textContent = "+";
}
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  navigation.classList.toggle("open", !expanded);
  menuButton.setAttribute("aria-expanded", String(!expanded));
  menuButton.querySelector("span").textContent = expanded ? "+" : "−";
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});
const filters = document.querySelectorAll("[data-filter]");
const papers = document.querySelectorAll(".publication-list li");
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(other => {
    const selected = other === button;
    other.classList.toggle("active", selected);
    other.setAttribute("aria-pressed", String(selected));
  });
  let visible = 0;
  papers.forEach(paper => {
    paper.hidden = button.dataset.filter !== "all" && paper.dataset.author !== button.dataset.filter;
    if (!paper.hidden) visible++;
  });
  document.querySelector(".filter-status").textContent = `Showing ${visible} papers.`;
}));
document.querySelector("#year").textContent = String(new Date().getFullYear());
