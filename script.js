// Replace with the decorator's real address before publishing, e.g. 'hello@example.co.uk'.
// If left blank, the website prepares an email without a preset recipient.
const CONTACT_EMAIL = '';

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
  const values = Object.fromEntries(new FormData(event.currentTarget).entries());
  const subject = `Decorating quote enquiry from ${values.name} (${values.location})`;
  const body = `Hello,\n\nI'd like a quotation for some decorating work.\n\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nLocation: ${values.location}\nService: ${values.service}\n\nProject details:\n${values.message}\n\nKind regards,\n${values.name}`;
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('formStatus').textContent = CONTACT_EMAIL
    ? 'Your email app should open with the enquiry ready for you to send. No details have been submitted by the website.'
    : 'Demo mode: add the business email in script.js to address enquiries automatically. Your email app will open with the message ready to send.';
  window.location.href = mailto;
});
