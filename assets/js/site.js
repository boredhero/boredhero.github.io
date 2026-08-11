const comparisons = document.querySelectorAll("[data-comparison]");

for (const comparison of comparisons) {
  const controls = comparison.querySelector(".comparison-controls");
  const range = comparison.querySelector('input[type="range"]');

  if (!controls || !range) continue;

  comparison.dataset.enhanced = "true";
  controls.hidden = false;

  const updateComparison = () => {
    const value = Number(range.value);
    comparison.style.setProperty("--reveal", `${value}%`);
    range.setAttribute("aria-valuetext", `${value}% filtered image revealed`);
  };

  range.addEventListener("input", updateComparison);
  updateComparison();
}
