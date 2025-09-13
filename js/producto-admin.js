document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('admin-productos');
    if (!contenedor || typeof productos === "undefined") return;

    let html = `
        <h2 style="text-align:center;margin-top:30px;">Lista de Productos</h2>
        <div style="overflow-x:auto;">
        <table style="width:100%;max-width:900px;margin:30px auto;border-collapse:collapse;background:#fff;">
            <thead>
                <tr style="background:#FFC0CB;color:#8B4513;">
                    <th style="padding:10px;border:1px solid #eee;">Imagen</th>
                    <th style="padding:10px;border:1px solid #eee;">Nombre</th>
                    <th style="padding:10px;border:1px solid #eee;">Categoría</th>
                    <th style="padding:10px;border:1px solid #eee;">Precio</th>
                </tr>
            </thead>
            <tbody>
    `;
    productos.forEach(prod => {
        html += `
            <tr>
                <td style="text-align:center;padding:8px;border:1px solid #eee;">
                    <img src="../${prod.imagen}" alt="${prod.nombre}" style="width:60px;height:60px;object-fit:cover;border-radius:6px;">
                </td>
                <td style="padding:8px;border:1px solid #eee;">${prod.nombre}</td>
                <td style="padding:8px;border:1px solid #eee;">${prod.categoria}</td>
                <td style="padding:8px;border:1px solid #eee;">$${prod.precio.toLocaleString()}</td>
            </tr>
        `;
    });
    html += `
            </tbody>
        </table>
        </div>
    `;
    contenedor.innerHTML = html;
});