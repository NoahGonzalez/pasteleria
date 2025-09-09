document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formLogin');
    const errorMsg = document.getElementById('login-error');
    const modal = document.getElementById('login-success-modal');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const correo = document.getElementById('correo').value;
        const password = document.getElementById('password').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios.find(u => u.correo === correo && u.password === password);

        if (usuario) {
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
            modal.style.display = 'flex';
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        } else {
            errorMsg.style.display = 'block';
        }
    });
});