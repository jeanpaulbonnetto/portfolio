const navToggle = document.getElementById('nav-toggle');

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.checked = false;
  });
});
