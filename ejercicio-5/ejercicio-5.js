// Paso 1: Selecciona el input y la lista
// Paso 2: Escucha Enter en el input y agrega <li> con el texto + un botón "Eliminar"
// Paso 3: Usa delegación de eventos en el ul para detectar clicks en tareas o botones
// Paso 4: Si es tarea → alternar completado; si es botón → eliminar la tarea

const tarea = document.getElementById('tarea');
const listaTareas = document.getElementById('listaTareas');

// Paso 2: Escucha Enter en el input para agregar tarea
tarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && tarea.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = tarea.value;

        // agregamos botón de eliminar
        const btnEliminar = document.createElement('button'); 
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('eliminar');

        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);

        tarea.value = ''; // limpiar input
    }
});

// Paso 3: Delegación de eventos en el ul
listaTareas.addEventListener('click', (evento) => {
    const elemento = evento.target; // elemento que el usuario clickeó lol

    // Paso 4: Si se clickeó el botón de eliminar
    if (elemento.classList.contains('eliminar')) {
        const li = elemento.parentElement;
        li.remove();
    }

    // Paso 4 pt.2: Si se clickeó el <li> pero no el botón
    else if (elemento.tagName === 'LI') {
        elemento.classList.toggle('completada');
    }
});