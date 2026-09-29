(() => {
  const doc = document.documentElement;
  doc.classList.add('js');

  // Header: transparent over the hero, solid once scrolled
  const header = document.querySelector('[data-header]');
  const hero = document.querySelector('.hero');
  const setHeader = () => {
    const threshold = hero ? hero.offsetHeight - header.offsetHeight - 40 : 40;
    header.classList.toggle('is-solid', window.scrollY > Math.min(threshold, 120));
  };
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  // Mobile nav
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const setNav = (open) => {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });

  // Highlight the nav link for the section in view
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.removeAttribute('aria-current'));
      byId.get(entry.target.id)?.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main > section[id]').forEach((el) => spy.observe(el));

  // Gentle reveal on scroll
  const targets = document.querySelectorAll(
    '.section-head, .prose, .photo, .band-inner, .chain li, .traits li, .pillar, .pillars-span, .sft li, .ladder li, .steps li, .engage, .panel, .regions li, .team li, .contact-inner > *'
  );
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      reveal.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach((el) => {
    // Stagger siblings slightly
    const i = [...el.parentElement.children].indexOf(el);
    el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
    el.classList.add('reveal');
    reveal.observe(el);
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
