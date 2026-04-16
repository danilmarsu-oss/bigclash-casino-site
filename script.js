const dateNode = document.getElementById("page-updated-date");
if (dateNode) {
  const now = new Date();
  dateNode.textContent = now.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

const accordionButtons = document.querySelectorAll(".accordion-trigger");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    if (!item) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";

    accordionButtons.forEach((otherButton) => {
      otherButton.setAttribute("aria-expanded", "false");
      const otherItem = otherButton.closest(".accordion-item");
      if (!otherItem) return;
      const otherPanel = otherItem.querySelector(".accordion-panel");
      if (otherPanel) otherPanel.style.maxHeight = "0px";
    });

    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      const panel = item.querySelector(".accordion-panel");
      if (panel) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    }
  });
});
