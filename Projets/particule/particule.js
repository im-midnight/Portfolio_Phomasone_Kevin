// ── Animations au chargement ──
document.addEventListener('DOMContentLoaded', () => {

    // Éléments hero animés en cascade au chargement
    const heroEls = [
        { sel: '.back-link',  delay: 0   },
        { sel: '.hero-label', delay: 100 },
        { sel: '.hero-title', delay: 200 },
        { sel: '.hero-desc',  delay: 300 },
        { sel: '.badge-row',  delay: 400 },
        { sel: '.hero-btns',  delay: 500 },
    ];

    heroEls.forEach(({ sel, delay }) => {
        const el = document.querySelector(sel);
        if (!el) return;
        setTimeout(() => el.classList.add('visible'), delay);
    });

    // Éléments animés au scroll (IntersectionObserver)
    const scrollEls = document.querySelectorAll(
        '.feat-card, .controls-grid, .team-grid, .code-block'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scrollEls.forEach(el => observer.observe(el));

    // Feat cards en cascade
    const featCards = document.querySelectorAll('.feat-card');
    const featObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    featObserver.unobserve(entry.target);
                }, i * 80);
            }
        });
    }, { threshold: 0.05 });

    featCards.forEach(card => featObserver.observe(card));
});