document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formRegistro');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const usuario = {
            run: document.getElementById('run').value,
            nombre: document.getElementById('nombre').value,
            apellidos: document.getElementById('apellidos').value,
            correo: document.getElementById('correo').value,
            password: document.getElementById('password').value,
            direccion: document.getElementById('direccion').value,
            region: document.getElementById('region').value,
            comuna: document.getElementById('comuna').value,
            fechaNac: document.getElementById('fechaNac').value
        };

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        window.location.href = "confirmacion.html";
    });
});