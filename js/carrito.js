function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(nombre, precio) {
    let carrito = obtenerCarrito();
    let producto = carrito.find(p => p.nombre === nombre);
    if (producto) {
        producto.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    guardarCarrito(carrito);
    actualizarCarroDropdown();
}

function eliminarDelCarrito(nombre) {
    let carrito = obtenerCarrito().filter(p => p.nombre !== nombre);
    guardarCarrito(carrito);
    mostrarCarrito();
    actualizarCarroDropdown();
}

function modificarCantidad(nombre, cantidad) {
    let carrito = obtenerCarrito();
    let producto = carrito.find(p => p.nombre === nombre);
    if (producto) {
        producto.cantidad = parseInt(cantidad);
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(p => p.nombre !== nombre);
        }
        guardarCarrito(carrito);
        mostrarCarrito();
        actualizarCarroDropdown();
    }
}

// Para el dropdown del carrito en todas las páginas
function actualizarCarroDropdown() {
    const lista = document.getElementById('carro-lista');
    const cantidad = document.getElementById('carro-cantidad');
    if (!lista || !cantidad) return;
    const carrito = obtenerCarrito();
    cantidad.textContent = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    if (carrito.length === 0) {
        lista.innerHTML = '<p style="padding:10px;">El carrito está vacío.</p>';
    } else {
        lista.innerHTML = '<ul style="list-style:none;padding:0;margin:0;">' +
            carrito.map(p => `<li style="padding:4px 0;border-bottom:1px solid #eee;">
                ${p.nombre} x${p.cantidad} <span style="float:right;">$${(p.precio*p.cantidad).toLocaleString()}</span>
            </li>`).join('') +
            '</ul>';
    }
}

// Para la página carrito.html
function mostrarCarrito() {
    const contenedor = document.getElementById('carrito-contenido');
    const resumen = document.getElementById('carrito-resumen');
    if (!contenedor || !resumen) return;
    let carrito = obtenerCarrito();
    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>El carrito está vacío.</p>';
        resumen.innerHTML = '';
        return;
    }
    let html = '<table style="width:100%;border-collapse:collapse;"><tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Total</th><th>Acción</th></tr>';
    let total = 0;
    carrito.forEach(p => {
        let subtotal = p.precio * p.cantidad;
        total += subtotal;
        html += `<tr>
            <td>${p.nombre}</td>
            <td>$${p.precio.toLocaleString()}</td>
            <td>
                <input type="number" min="1" value="${p.cantidad}" style="width:50px;" onchange="modificarCantidad('${p.nombre}', this.value)">
            </td>
            <td>$${subtotal.toLocaleString()}</td>
            <td>
                <button onclick="eliminarDelCarrito('${p.nombre}')" title="Eliminar" style="background:none;border:none;cursor:pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="#8B4513" viewBox="0 0 24 24">
                        <path d="M3 6h18v2H3V6zm2 3h14l-1.5 14h-11L5 9zm3 2v10h2V11H8zm4 0v10h2V11h-2z"/>
                    </svg>
                </button>
            </td>
        </tr>`;
    });
    html += '</table>';
    contenedor.innerHTML = html;
    resumen.innerHTML = `<h3>Total: $${total.toLocaleString()}</h3>`;
}

// Inicialización automática
document.addEventListener('DOMContentLoaded', function() {
    actualizarCarroDropdown();
    mostrarCarrito();
});