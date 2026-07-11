const navToggle = document.getElementById('nav-toggle');

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.checked = false;
  });
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('cf-name').value;
  const email = document.getElementById('cf-email').value;
  const message = document.getElementById('cf-message').value;

  const subject = `Contact portfolio — ${name}`;
  const body = `${message}\n\n---\nDe : ${name} (${email})`;

  window.location.href = `mailto:jeanpaul.bonnetto@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
