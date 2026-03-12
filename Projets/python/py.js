window.addEventListener('load', () => {
    const toAnimate = document.querySelectorAll(
        '.back-link, .hero-label, .hero-title, .hero-desc, ' +
        '.badge-row, .btn-github, .feat-card, ' +
        '.controls-grid, .team-grid, .code-block'
    );

    toAnimate.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 80);
    });

    setTimeout(() => {
        toAnimate.forEach(el => el.classList.add('visible'));
    }, 3000);
});
function openLightbox(src, alt) {
    if (!src) return;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    img.src = src;
    img.alt = alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});

// Attach click to screenshot-main image if present
document.querySelectorAll('.screenshot-main img, .thumb img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

// Also attach to .screenshot-main and .thumb if they contain an img
document.querySelectorAll('.screenshot-main, .thumb').forEach(el => {
    el.addEventListener('click', () => {
        const img = el.querySelector('img');
        if (img) openLightbox(img.src, img.alt);
    });
});