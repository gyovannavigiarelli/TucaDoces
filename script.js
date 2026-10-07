document.addEventListener('DOMContentLoaded', () => {
    const bannerCookies = document.getElementById('banner-cookies');
    const btnAceitar = document.getElementById('btn-aceitar-cookies');

    // Garante que o banner existe na página antes de continuar
    if (!bannerCookies) return;

    // Verifica se o usuário já aceitou
    const cookiesAceitos = localStorage.getItem('cookiesAceitos');
    if (cookiesAceitos === 'sim') {
        bannerCookies.classList.add('oculto');
    }

    // Adiciona o evento de clique caso o botão exista
    if (btnAceitar) {
        btnAceitar.addEventListener('click', () => {
            localStorage.setItem('cookiesAceitos', 'sim');
            bannerCookies.classList.add('oculto');
        });
    }
});