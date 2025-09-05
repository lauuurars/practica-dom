// Paso 1: Inicializa una variable para el valor del contador
let valorContador = 0; //el contador inicia en 0

// Paso 2: Selecciona los botones y el span
const decrementar = document.getElementById('decrementar');
const span = document.getElementById('valor');
const incrementar = document.getElementById('incrementar');

// Paso 3: Agrega listeners a los botones para modificar el valor

incrementar.addEventListener('click', () => {
    valorContador++ // sumamos 1 unidad 
    span.textContent = valorContador; // actualiza el valor cada vez q se da click
});

decrementar.addEventListener('click', () => {
    if (valorContador > 0) {      // evitamos negativos
        valorContador--;           // resta 1 solo si es mayor que 0
        span.textContent = valorContador;
    }
});