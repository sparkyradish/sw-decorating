const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', event => {
  event.preventDefault();
  const v = Object.fromEntries(new FormData(event.currentTarget).entries());
  const message = `Hi Steve, I'd like a decorating quote.\n\nName: ${v.name}\nPhone: ${v.phone}\nEmail: ${v.email}\nLocation: ${v.location}\nService: ${v.service}\n\nProject details:\n${v.message}`;
  const url = `https://wa.me/447870640722?text=${encodeURIComponent(message)}`;
  document.getElementById('formStatus').textContent = 'WhatsApp will open with your enquiry ready to send. Please press Send in WhatsApp to contact Steve.';
  window.location.href = url;
});
