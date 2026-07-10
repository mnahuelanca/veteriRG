
document.addEventListener('DOMContentLoaded', function () {
    const inputFiltro = document.getElementById('filtro-nombre');
    const veterinarias = document.querySelectorAll('.veterinaria-card');

    inputFiltro.addEventListener('input', function () {
        const filtroTexto = inputFiltro.value.trim().toLowerCase();

        veterinarias.forEach(function (veterinaria) {
            const nombreVeterinaria = veterinaria.querySelector('h2').textContent.toLowerCase();

            if (nombreVeterinaria.includes(filtroTexto)) {
                veterinaria.style.display = ''; // Restore default display style (flex) defined in CSS
            } else {
                veterinaria.style.display = 'none';
            }
        });
    });
});
