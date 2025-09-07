// Inicializamos datos en localStorage si no existen
if(!localStorage.getItem("productos")) {
  const productos = [
    { id: 1, nombre: "Camiseta", precio: 15000 },
    { id: 2, nombre: "Zapatos", precio: 35000 },
    { id: 3, nombre: "Pantalón", precio: 20000 }
  ];
  localStorage.setItem("productos", JSON.stringify(productos));
}

if(!localStorage.getItem("usuarios")) {
  const usuarios = [
    { id: 1, nombre: "Jorge", email: "jorge@mail.com" },
    { id: 2, nombre: "Ana", email: "ana@mail.com" }
  ];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Función para mostrar la sección correcta
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';

  if(id === "productos") renderProductos();
  if(id === "usuarios") renderUsuarios();
}

// Renderizar productos
function renderProductos() {
  const lista = document.getElementById("lista-productos");
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  lista.innerHTML = "";
  productos.forEach(p => {
    lista.innerHTML += `<p>${p.nombre} - $${p.precio}</p>`;
  });
}

// Renderizar usuarios
function renderUsuarios() {
  const lista = document.getElementById("lista-usuarios");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  lista.innerHTML = "";
  usuarios.forEach(u => {
    lista.innerHTML += `<p>${u.nombre} - ${u.email}</p>`;
  });
}

// Mostrar productos por defecto al cargar la página
mostrarSeccion("productos");
