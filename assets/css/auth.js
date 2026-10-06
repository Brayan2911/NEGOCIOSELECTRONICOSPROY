document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const authContainer = document.getElementById('navAuth');

    if (authContainer) {
        if (isLoggedIn) {
            authContainer.innerHTML = `
                <a href="perfil.html" class="btn-secondary" style="padding: 0.4rem 0.8rem;">Mi Perfil</a>
                <a href="admin.html" style="font-size: 0.85rem; opacity: 0.8; margin-left: 0.5rem;">Admin</a>
            `;
        } else {
            authContainer.innerHTML = `
                <a href="login.html" class="btn-login">Iniciar sesión</a>
            `;
        }
    }
});