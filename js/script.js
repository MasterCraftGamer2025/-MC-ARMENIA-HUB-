document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.textShadow = "0 0 10px lime";
  });
  link.addEventListener("mouseout", () => {
    link.style.textShadow = "none";
  });
});
