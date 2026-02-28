function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(b => b.classList.remove('active'));

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }

    btns.forEach(b => {
        if (b.getAttribute('onclick').includes(pageId)) {
            b.classList.add('active');
        }
    });
}