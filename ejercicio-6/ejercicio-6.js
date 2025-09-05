// INSTRUCCIONES:
// Paso 1: Selecciona el botón (#btnCargar) y el contenedor (#contenedor)
// Paso 2: Crea una función async que:
//   - Muestre "Cargando personajes..." en el contenedor
//   - Use fetch() con await para traer: https://rickandmortyapi.com/api/character
//   - Convierta la respuesta a JSON con .json()
// Paso 3: Accede a los personajes con data.results y toma los primeros 6 (usa .slice(0, 6))
//   - Por cada personaje, crea un div con clase 'character-card'
//   - Dentro del div incluye:
//     * Una imagen: <img src="${personaje.image}" alt="${personaje.name}">
//     * El nombre: <div class="character-name">${personaje.name}</div>
//     * El estado: <div class="character-status">Estado: ${personaje.status}</div>
//   - Agrega cada tarjeta a un contenedor con clase 'characters-grid'
// Paso 4: Conecta la función al evento click del botón


// Paso 1: Selecciona el botón (#btnCargar) y el contenedor (#contenedor)
const btnCargar = document.getElementById('btnCargar');
const contenedor = document.getElementById('contenedor');

// Paso 2: Crea una función async
async function cargarPersonajes() {
    // Muestre "Cargando personajes..." en el contenedor
    contenedor.innerHTML = 'Cargando personajes...';

    try {
        // Use fetch() con await para traer: https://rickandmortyapi.com/api/character
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');

        // Convierta la respuesta a JSON con .json()
        const data = await respuesta.json();

        // Paso 3: Accede a los personajes con data.results y toma los primeros 6 (usa .slice(0, 6))
        const personajes = data.results.slice(0, 6);

        // Crea el contenedor con clase 'characters-grid'
        let gridHTML = '<div class="characters-grid">';

        // Por cada personaje, crea un div con clase 'character-card'
        personajes.forEach(personaje => {
            gridHTML += `
            <div class="character-card">
                <img src="${personaje.image}" alt="${personaje.name}">
                <div class="character-name">${personaje.name}</div>
                <div class="character-status">Estado: ${personaje.status}</div>
            </div>
            `;
        });

        gridHTML += '</div>';

        // Agrega cada tarjeta al contenedor
        contenedor.innerHTML = gridHTML;

    } catch (error) {
        console.error('Error:', error);
        contenedor.innerHTML = 'Error al cargar los personajes';
    }
}

// Paso 4: Conecta la función al evento click del botón
btnCargar.addEventListener('click', cargarPersonajes);