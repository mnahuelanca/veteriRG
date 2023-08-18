document.addEventListener('DOMContentLoaded', function() {
    const botonMostrarFormulario = document.getElementById('mostrar-formulario');
    const formularioTestimonio = document.getElementById('formulario-testimonio');
    const seccionTestimonios = document.querySelector('.testimonios');

    botonMostrarFormulario.addEventListener('click', function() {
        formularioTestimonio.classList.toggle('mostrar');
    });

    formularioTestimonio.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = formularioTestimonio.nombre.value;
        const veterinaria = formularioTestimonio.veterinaria.value;
        const testimonio = formularioTestimonio.testimonio.value;

        const nuevoTestimonio = document.createElement('div');
        nuevoTestimonio.classList.add('testimonio');

        const textoTestimonio = document.createElement('p');
        textoTestimonio.classList.add('testimonio-texto');
        textoTestimonio.textContent = testimonio;

        const autorTestimonio = document.createElement('p');
        autorTestimonio.classList.add('testimonio-autor');
        autorTestimonio.textContent = '- ' + nombre + ' (Veterinaria: ' + veterinaria + ')';

        nuevoTestimonio.appendChild(textoTestimonio);
        nuevoTestimonio.appendChild(autorTestimonio);

        seccionTestimonios.insertBefore(nuevoTestimonio, seccionTestimonios.firstChild);

        formularioTestimonio.reset();
        formularioTestimonio.classList.remove('mostrar');

        // Almacenar el comentario en el almacenamiento local
        const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentarios.push({ nombre, veterinaria, testimonio });
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
    });

    // Cargar los comentarios almacenados al cargar la página
    const comentariosAlmacenados = JSON.parse(localStorage.getItem('comentarios')) || [];
    for (const comentario of comentariosAlmacenados) {
        const nuevoTestimonio = document.createElement('div');
        nuevoTestimonio.classList.add('testimonio');

        const textoTestimonio = document.createElement('p');
        textoTestimonio.classList.add('testimonio-texto');
        textoTestimonio.textContent = comentario.testimonio;

        const autorTestimonio = document.createElement('p');
        autorTestimonio.classList.add('testimonio-autor');
        autorTestimonio.textContent = '- ' + comentario.nombre + ' (Veterinaria: ' + comentario.veterinaria + ')';

        nuevoTestimonio.appendChild(textoTestimonio);
        nuevoTestimonio.appendChild(autorTestimonio);

        seccionTestimonios.appendChild(nuevoTestimonio);
    }
});
