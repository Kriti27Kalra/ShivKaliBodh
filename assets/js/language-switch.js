window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langBtn");
  const path = window.location.pathname;

  if (path.includes("/hindi") || window.location.href.includes("/hindi")) {
    btn.innerText = "English";
  } else {
    btn.innerText = "हिन्दी";
  }
});

function switchLanguage() {
  const currentURL = window.location.href;
  const currentPath = window.location.pathname;

  // If already in Hindi section
  if (currentPath.includes("/hindi") || currentURL.includes("/hindi")) {
    // Go to English version
    const englishURL = currentURL.replace("/hindi", "");
    window.location.href = englishURL;
  } else {
    // Add /hindi before path
    if (currentURL.includes("github.io")) {
      // GitHub Pages (e.g. /ShivKaliBodh/index.html → /ShivKaliBodh/hindi/index.html)
      const parts = currentPath.split("/");
      const repo = parts[1]; // ShivKaliBodh
      const subPath = currentPath.replace(`/${repo}`, "");
      const newURL = `/${repo}/hindi${subPath}`;
      window.location.href = newURL;
    } else {
      // Local (http://hindi/ → http://hindi/hindi/)
      const newPath = "/hindi" + currentPath;
      window.location.href = newPath;
    }
  }
}
