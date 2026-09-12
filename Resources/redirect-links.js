(() => {
  const scriptUrl = document.currentScript?.src || location.href;
  const redirectsUrl = new URL("../redirects.json", scriptUrl);

  fetch(redirectsUrl, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("Nie udało się pobrać mapy przekierowań.");
      return response.json();
    })
    .then((redirects) => {
      document.querySelectorAll("a[href]").forEach((link) => {
        const url = new URL(link.getAttribute("href"), document.baseURI);
        const path = decodeURIComponent(url.pathname).replace(/\/+$/, "") || "/";
        const target = redirects[path];

        if (url.origin === location.origin && /^https?:\/\//i.test(target)) {
          link.href = target;
        }
      });
    })
    .catch(() => {});
})();