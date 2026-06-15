/* ==========================================================================
   COURTIN BAT — Interactions
   Header sticky, menu mobile, scroll reveals, animation goutte/filet d'eau.
   GSAP est chargé dynamiquement ; tout fonctionne en fallback sans JS.
   ========================================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(max-width: 768px)').matches;

/* ---------- Marqueur JS actif ---------- */
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

/* ---------- Header sticky (.scrolled après 10px) ---------- */
function initHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Menu mobile ---------- */
function initMobileMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!toggle || !menu) return;

  const close = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };
  const open = () => {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  toggle.addEventListener('click', () => {
    menu.classList.contains('open') ? close() : open();
  });

  // Fermeture au clic sur un lien
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));

  // Fermeture sur Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ---------- Scroll reveal (IntersectionObserver — léger, sans dépendance) ---------- */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-reveal-delay') || 0;
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  items.forEach((el) => io.observe(el));
}

/* ---------- Animations GSAP (logo + filet d'eau au scroll) ---------- */
async function initGsap() {
  if (prefersReducedMotion) return;

  let gsap, ScrollTrigger;
  try {
    const gsapMod = await import('gsap');
    gsap = gsapMod.gsap || gsapMod.default;
    const stMod = await import('gsap/ScrollTrigger');
    ScrollTrigger = stMod.ScrollTrigger || stMod.default;
    gsap.registerPlugin(ScrollTrigger);
  } catch (e) {
    // GSAP indisponible : on garde le fallback IntersectionObserver
    return;
  }

  /* Apparition premium du logo hero + goutte qui tombe */
  const heroLogo = document.querySelector('[data-hero-logo]');
  if (heroLogo) {
    gsap.from(heroLogo, {
      opacity: 0,
      y: 18,
      scale: 0.96,
      duration: 1.1,
      ease: 'power3.out',
    });

    const drop = heroLogo.querySelector('[data-drop]');
    if (drop) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.6, delay: 1 });
      tl.set(drop, { opacity: 0, y: 0, scale: 0.4, transformOrigin: 'center top' })
        .to(drop, { opacity: 1, scale: 1, duration: 0.5, ease: 'power1.out' })
        .to(drop, { y: 46, duration: 0.7, ease: 'power2.in' })
        .to(drop, { opacity: 0, scaleX: 1.6, scaleY: 0.4, duration: 0.25 }, '-=0.05');
    }
  }

  /* Filet d'eau : tracé SVG qui se dessine au scroll, reliant les sections */
  const path = document.querySelector('[data-water-path] path');
  if (path) {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-water-scope]',
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: isMobile ? 0.6 : true,
      },
    });
  }

  /* Gouttes révélatrices : petite onde sur certaines sections */
  gsap.utils.toArray('[data-drop-reveal]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 82%' },
    });
  });
}

/* ---------- FAQ accordéon ---------- */
function initFaq() {
  document.querySelectorAll('[data-faq-item]').forEach((item) => {
    const btn = item.querySelector('[data-faq-q]');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

/* ---------- Formulaire : message de succès ---------- */
function initForm() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('success') === '1') {
    const banner = document.querySelector('[data-form-success]');
    if (banner) {
      banner.hidden = false;
      banner.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
    }
  }
}

/* ---------- Tracking analytics (hooks neutres, prêts pour GA4 / Plausible) ---------- */
function initTracking() {
  const track = (name, props = {}) => {
    // Plausible
    if (window.plausible) window.plausible(name, { props });
    // GA4
    if (window.gtag) window.gtag('event', name, props);
  };
  document.querySelectorAll('[data-track]').forEach((el) => {
    el.addEventListener('click', () => track(el.getAttribute('data-track') || 'click'));
  });
  const quoteForm = document.querySelector('form[name="quote"]');
  if (quoteForm) quoteForm.addEventListener('submit', () => track('quote_submit'));
}

/* ---------- Init ---------- */
function init() {
  initHeader();
  initMobileMenu();
  initReveal();
  initFaq();
  initForm();
  initTracking();
  initGsap();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
