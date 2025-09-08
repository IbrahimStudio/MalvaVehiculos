// Small helpers shared across pages
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// (Optional) simple fade-in
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity .25s ease';
    document.body.style.opacity = '1';
  });
});
