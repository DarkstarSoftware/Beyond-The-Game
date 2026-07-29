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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Meta Pixel: track outbound clicks to the App Store / Google Play as a custom event.
// This lets you see, in Events Manager, which platform people actually click through to
// after landing on the page — not just that they viewed the page.
document.querySelectorAll('a[data-store]').forEach(link => {
  link.addEventListener('click', () => {
    const store = link.getAttribute('data-store'); // "ios" or "android"
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'StoreClick', { store });
    }
  });
});
