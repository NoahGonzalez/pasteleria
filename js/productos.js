document.addEventListener("DOMContentLoaded", () => {
  const botonesDetalle = document.querySelectorAll(".detalle-btn");

  botonesDetalle.forEach(boton => {
    boton.addEventListener("click", () => {
      const contenedor = boton.nextElementSibling;
      if (contenedor.style.display === "none" || contenedor.style.display === "") {
        contenedor.style.display = "block";
      } else {
        contenedor.style.display = "none";
      }
    });
  });
});

