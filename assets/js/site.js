// Keeps "19 years" and the footer year current on their own.
(function () {
  const now = new Date();
  document.querySelectorAll("[data-years-since]").forEach((el) => {
    const [y, m = 1] = el.dataset.yearsSince.split("-").map(Number);
    el.textContent = Math.floor(now.getFullYear() - y + (now.getMonth() + 1 - m) / 12);
  });
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = now.getFullYear()));
})();

// Analytics consent banner: shown only to visitors whose time zone is in Europe
// (where Consent Mode keeps analytics cookies off until they accept), and on demand
// from "Cookie settings" in the footer.
(function () {
  const box = document.getElementById("consent");
  if (!box) return;
  let stored = null;
  try { stored = localStorage.getItem("analytics-consent"); } catch (e) {}
  let tz = "";
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
  const european = /^Europe\//.test(tz) || tz === "Atlantic/Reykjavik" || tz === "Atlantic/Canary" || tz === "Atlantic/Madeira" || tz === "Atlantic/Azores";
  if (!stored && european) box.hidden = false;

  box.querySelectorAll("[data-consent]").forEach((b) =>
    b.addEventListener("click", () => {
      const v = b.dataset.consent;
      try { localStorage.setItem("analytics-consent", v); } catch (e) {}
      if (typeof gtag === "function") gtag("consent", "update", { analytics_storage: v });
      box.hidden = true;
    })
  );
  document.querySelectorAll("[data-cookie-settings]").forEach((b) =>
    b.addEventListener("click", () => { box.hidden = false; })
  );
})();
