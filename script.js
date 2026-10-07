// Executa quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Verifica no localStorage se o usuário já aceitou os cookies
    const cookiesAccepted = localStorage.getItem('tuca_cookies_accepted');

    if (cookiesAccepted === 'true') {
        cookieBanner.classList.add('hidden');
    }

    // Evento para o botão de aceitar cookies
    acceptBtn.addEventListener('click', function() {
        // Salva a decisão do usuário no navegador
        localStorage.setItem('tuca_cookies_accepted', 'true');
        
        // Efeito suave para ocultar o banner
        cookieBanner.style.opacity = '0';
        cookieBanner.style.transition = 'opacity 0.4s ease';
        
        setTimeout(function() {
            cookieBanner.classList.add('hidden');
        }, 400);
    });
});
