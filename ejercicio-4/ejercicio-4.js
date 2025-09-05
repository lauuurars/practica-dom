    // Paso 1: Selecciona el input y los <li>
    // Paso 2: Escucha el evento input
    // Paso 3: Filtra los nombres mostrando solo los que coincidan con lo escrito

    const buscador = document.getElementById('buscador');
    const nombres = document.querySelectorAll('#nombres li');

    // evento input que se activa cada vez q escribimos algo
    buscador.addEventListener('input', () => {
        const texto = buscador.value.toLowerCase();


        // recorremos y filtramos

        nombres.forEach (li => {
            const nombre = li.textContent.toLowerCase();
            if (nombre.includes(texto)) {
                li.style.display = ''; // se muestra el resultado si coincide 
            } else {
                li.style.display = 'none'; // ocultamos el resultado si no coincide
            }
        })

    })