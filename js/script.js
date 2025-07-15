// script.js

// Optional enhancements can go here

document.addEventListener('DOMContentLoaded', () => {
  console.log("Shivkalibodh website loaded successfully.");

  // Highlight active nav link based on URL
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === path.split("/").pop()) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
