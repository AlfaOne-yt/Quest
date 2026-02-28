function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    
    if (window.event) {
        window.event.currentTarget.classList.add('active');
    }
}