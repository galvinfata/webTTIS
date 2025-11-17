const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');
const scrollTopBtn = document.querySelector('.scroll-top');
const yearSpan = document.getElementById('year');
const form = document.querySelector('.report-form');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen.toString());
    });
}

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const instansi = form.instansi.value || 'Instansi Anda';
        alert(`Terima kasih ${instansi}. Desk monitoring kami akan segera menghubungi.`);
        form.reset();
    });
}
