document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formRegistro');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtén los valores del formulario
        const run = document.getElementById('run').value;
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const correo = document.getElementById('correo').value;
        const password = document.getElementById('password').value;
        const direccion = document.getElementById('direccion').value;
        const region = document.getElementById('region').value;
        const comuna = document.getElementById('comuna').value;
        const fechaNac = document.getElementById('fechaNac').value;
        const codigo = document.getElementById('codigo') ? document.getElementById('codigo').value.trim() : "";

        // Calcular edad
        let edad = 0;
        if (fechaNac) {
            const hoy = new Date();
            const cumple = new Date(fechaNac);
            edad = hoy.getFullYear() - cumple.getFullYear();
            const m = hoy.getMonth() - cumple.getMonth();
            if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
                edad--;
            }
        }

        // Determinar beneficios
        let beneficios = {};
        if (edad > 50) {
            beneficios.descuento = 0.5; // 50%
        }
        if (codigo.toUpperCase() === "FELICES50") {
            beneficios.descuento = Math.max(beneficios.descuento || 0, 0.1); // 10% (o 50% si ya lo tiene)
            beneficios.descuentoFijo = true;
        }
        if (correo.endsWith("@duocuc.cl")) {
            beneficios.tortaGratisCumple = true;
        }

        const usuario = {
            run,
            nombre,
            apellidos,
            correo,
            password,
            direccion,
            region,
            comuna,
            fechaNac,
            edad,
            beneficios
        };

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        window.location.href = "confirmacion.html";
    });
});