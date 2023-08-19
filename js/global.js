const btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    btnMenu.setAttribute('aria-expanded', active);
    active ? btnMenu.setAttribute('aria-label', 'Fechar menu') : btnMenu.setAttribute('aria-label', 'Abrir menu');
})