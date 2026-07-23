const menuButton = document.querySelector('.menu-button');
const siteMenu = document.querySelector('.site-menu');

menuButton?.addEventListener('click', () => {
  const open = siteMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

siteMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteMenu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const modal = document.getElementById('android-modal');
const notifyButton = document.getElementById('android-notify');
const closeButton = modal?.querySelector('.modal-close');
let lastFocused;

function openModal() {
  lastFocused = document.activeElement;
  modal.hidden = false;
  closeButton.focus();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  lastFocused?.focus();
}

notifyButton?.addEventListener('click', openModal);
closeButton?.addEventListener('click', closeModal);
modal?.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal && !modal.hidden) closeModal();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
