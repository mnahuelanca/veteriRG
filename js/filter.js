
document.addEventListener('DOMContentLoaded', function () {
    const inputFiltro = document.getElementById('filtro-nombre');
    const veterinarias = document.querySelectorAll('.veterinaria, .veterinaria-fix, .veterinaria-zoonosis'); // Incluye ambas clases

    inputFiltro.addEventListener('input', function () {
        const filtroTexto = inputFiltro.value.toLowerCase();

        veterinarias.forEach(function (veterinaria) {
            const nombreVeterinaria = veterinaria.querySelector('h2').textContent.toLowerCase();

            if (nombreVeterinaria.includes(filtroTexto)) {
                veterinaria.style.display = 'block';
            } else {
                veterinaria.style.display = 'none';
            }
        });
    });
});
