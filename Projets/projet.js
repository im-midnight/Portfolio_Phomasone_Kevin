// Animation au chargement
document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        { el: document.querySelector('.projects-hero'), delay: 0 },
        { el: document.querySelector('.stats-section'),  delay: 150 },
        { el: document.querySelector('.section-divider'), delay: 250 },
        { el: document.querySelector('.filter-bar'),      delay: 350 },
    ];
    elements.forEach(({ el, delay }) => {
        if (!el) return;
        setTimeout(() => el.classList.add('visible'), delay);
    });
});
function filterCards(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cards = document.querySelectorAll('.project-card');
    let visibleIndex = 0;

    // D'abord, on cache tout instantanément sans toucher au layout
    cards.forEach((card) => {
        card.classList.remove('card-anim-active');
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
    });

    // Ensuite, on retire les cartes non-visibles du flux après le fade
    setTimeout(() => {
        cards.forEach((card) => {
            const cats = card.dataset.cat || '';
            const isVisible = cat === 'all' || cats.split(' ').includes(cat);

            if (!isVisible) {
                card.style.display = 'none';
            } else {
                card.style.display = '';
            }
        });

        // Puis on anime les cartes visibles en cascade
        cards.forEach((card) => {
            if (card.style.display === 'none') return;

            const delay = visibleIndex * 120;
            visibleIndex++;

            setTimeout(() => {
                card.style.opacity = '';
                card.style.pointerEvents = '';
                void card.offsetWidth;
                card.classList.add('card-anim-active');
            }, delay);
        });

    }, 150); // légère pause pour que le fade-out soit perçu
}