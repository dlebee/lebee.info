// "Since" durations stay current on their own: <li data-since="2009-03">.
(function () {
  const now = new Date();
  const items = document.querySelectorAll("[data-since]");
  const years = (s) => {
    const [y, m = 1] = s.split("-").map(Number);
    return Math.max(0, (now.getFullYear() - y) + (now.getMonth() + 1 - m) / 12);
  };
  const max = Math.max(...[...items].map((el) => years(el.dataset.since)), 1);

  items.forEach((el) => {
    const y = years(el.dataset.since);
    const out = el.querySelector(".yrs");
    if (out) out.textContent = (y < 1 ? "<1" : Math.floor(y)) + " yrs";
    const bar = el.querySelector(".bar i");
    if (bar) requestAnimationFrame(() => (bar.style.width = (y / max) * 100 + "%"));
  });

  // Total years of experience in the hero.
  document.querySelectorAll("[data-years-since]").forEach((el) => {
    el.textContent = Math.floor(years(el.dataset.yearsSince));
  });

  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = now.getFullYear()));

  // Print / save as PDF: expand every collapsed client list first.
  const opened = [];
  window.addEventListener("beforeprint", () => {
    document.querySelectorAll("details:not([open])").forEach((d) => { d.open = true; opened.push(d); });
  });
  window.addEventListener("afterprint", () => { opened.splice(0).forEach((d) => (d.open = false)); });
  document.querySelectorAll("[data-print]").forEach((b) => b.addEventListener("click", () => window.print()));
})();
