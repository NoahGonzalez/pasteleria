document.addEventListener('DOMContentLoaded', function() {
    // Regiones y comunas de Chile (ejemplo, puedes agregar más)
    const regionesYComunas = {
        "Región de Arica y Parinacota": [
            "Arica", "Camarones", "Putre", "General Lagos"
        ],
        "Región de Tarapacá": [
            "Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"
        ],
        "Región de Antofagasta": [
            "Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"
        ],
        // ...agrega el resto de las regiones y comunas aquí...
        "Región Metropolitana de Santiago": [
            "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"
        ]
    };

    const regionSelect = document.getElementById('region');
    const comunaSelect = document.getElementById('comuna');

    // Llenar regiones
    for (const region in regionesYComunas) {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    }

    // Cuando cambia la región, llenar comunas
    regionSelect.addEventListener('change', function() {
        const comunas = regionesYComunas[this.value] || [];
        // Limpiar comunas previas
        comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>';
        comunas.forEach(comuna => {
            const option = document.createElement('option');
            option.value = comuna;
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
    });
});