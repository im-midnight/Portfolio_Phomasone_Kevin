function openViewer(src, title) {
    document.getElementById('viewerIframe').src = src;
    document.getElementById('viewerTitle').textContent = title;
    document.getElementById('viewer').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeViewer() {
    document.getElementById('viewer').classList.remove('open');
    document.getElementById('viewerIframe').src = '';
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeViewer();
});