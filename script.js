// Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));

// Hamburger
const hbg = document.getElementById('hamburger');
const nl = document.querySelector('.nav-links');
if (hbg) hbg.addEventListener('click', () => nl.classList.toggle('open'));

// FAQ
function toggleFaq(el) {
  const item = el.parentElement;
  document.querySelectorAll('.faq-item').forEach(i => { if (i !== item) i.classList.remove('open'); });
  item.classList.toggle('open');
}

// Form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formOk').classList.remove('hidden');
    form.style.opacity = '.4';
    form.style.pointerEvents = 'none';
  });
}

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
