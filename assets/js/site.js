// Keeps "19 years" and the footer year current on their own.
(function () {
  const now = new Date();
  document.querySelectorAll("[data-years-since]").forEach((el) => {
    const [y, m = 1] = el.dataset.yearsSince.split("-").map(Number);
    el.textContent = Math.floor(now.getFullYear() - y + (now.getMonth() + 1 - m) / 12);
  });
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = now.getFullYear()));
})();
