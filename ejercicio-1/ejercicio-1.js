    // -------- solución
    
    // Paso 1: Selecciona el botón con document.getElementById
    const boton = document.getElementById("btnColor");

    let colorCambio = true; //asignamos un estado inicial 


    // Paso 2: Agrega un event listener al botón para detectar el click
    boton.addEventListener('click', () => {
        document.body.style = `background-color: ${colorCambio ? 'white' : 'violet'}`; // como el estado inicial es true, mostrará fondo blanco, si es false pasa a morado.
        colorCambio = !colorCambio
    });

     // Paso 3: Cambia el color de fondo de body dinámicamente