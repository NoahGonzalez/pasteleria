document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('lista-usuarios-admin');
    renderUsuarios();

    function renderUsuarios() {
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        if (!usuarios.length) {
            contenedor.innerHTML = "<p style='text-align:center;color:#8B4513;'>No hay usuarios registrados.</p>";
            return;
        }

        let html = `
            <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;background:#fff;">
                <thead>
                    <tr style="background:#FFC0CB;color:#8B4513;">
                        <th style="padding:8px;border:1px solid #eee;">Nombre</th>
                        <th style="padding:8px;border:1px solid #eee;">Apellidos</th>
                        <th style="padding:8px;border:1px solid #eee;">Correo</th>
                        <th style="padding:8px;border:1px solid #eee;">Región</th>
                        <th style="padding:8px;border:1px solid #eee;">Comuna</th>
                        <th style="padding:8px;border:1px solid #eee;">Edad</th>
                        <th style="padding:8px;border:1px solid #eee;">Beneficios</th>
                        <th style="padding:8px;border:1px solid #eee;">Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;
        usuarios.forEach((u, idx) => {
            let beneficios = [];
            if (u.beneficios) {
                if (u.beneficios.descuento === 0.5) beneficios.push("50% dcto.");
                else if (u.beneficios.descuento === 0.1) beneficios.push("10% dcto.");
                if (u.beneficios.tortaGratisCumple) beneficios.push("Torta cumpleaños");
            }
            html += `
                <tr>
                    <td style="padding:8px;border:1px solid #eee;">${u.nombre}</td>
                    <td style="padding:8px;border:1px solid #eee;">${u.apellidos}</td>
                    <td style="padding:8px;border:1px solid #eee;">${u.correo}</td>
                    <td style="padding:8px;border:1px solid #eee;">${u.region}</td>
                    <td style="padding:8px;border:1px solid #eee;">${u.comuna}</td>
                    <td style="padding:8px;border:1px solid #eee;">${u.edad || ''}</td>
                    <td style="padding:8px;border:1px solid #eee;">${beneficios.join(", ")}</td>
                    <td style="padding:8px;border:1px solid #eee;text-align:center;">
                        <button class="btn-eliminar-usuario" data-idx="${idx}" style="background:#e57373;color:#fff;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;">Eliminar</button>
                    </td>
                </tr>
            `;
        });
        html += `
                </tbody>
            </table>
            </div>
        `;
        contenedor.innerHTML = html;

        // Asignar eventos a los botones de eliminar
        document.querySelectorAll('.btn-eliminar-usuario').forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.getAttribute('data-idx'));
                eliminarUsuario(idx);
            });
        });
    }

    function eliminarUsuario(idx) {
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        if (confirm("¿Seguro que deseas eliminar este usuario?")) {
            usuarios.splice(idx, 1);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            renderUsuarios();
        }
    }
});