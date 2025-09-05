// Paso 1: Selecciona el input y la lista
// Paso 2: Agrega un listener al input para detectar Enter (keyup o keydown)
// Paso 3: Crea un nuevo <li> con el valor del input y agrégalo al ul
// Paso 4: Limpia el input después de agregar

const input = document.getElementById('entrada');
const lista = document.getElementById('lista')


//agregamos el evento para verificar si el usuario presiona 'Enter', usamos un operador && para que la función solo se ejecute si ambas condiciones son verdaderas, nos aseguramos de que el valor ingresado sea diferente a vacío '', y quitamos los espacios con .trim

input.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' && input.value.trim() !== '') {

        const crearLi = document.createElement('li');
        crearLi.textContent = input.value;
        lista.appendChild(crearLi);

        input.value = ''; // limpiamos el input
    }
});