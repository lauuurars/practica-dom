// ----------- creando elementos :p

//seleccionamos nuestro contenedor grande 

const contenedor = document.getElementById("contenedor");

//creamos un nuevo elemento p

const parrafo = document.createElement("p");
parrafo.textContent = "Hola mundo cruel" //asignamos el texto del párrafo

//subimos nuestro nuevo elemento al DOM

contenedor.appendChild(parrafo); //parrafo ahora está dentro del contenedor grande.

// ---------- leyendo elementos :p

const titulo = document.getElementById("titulo");
console.log("Texto del título:", titulo.textContent); //Texto del título: Titulo Original. mostramos el contenido del h1, en nuestra consola.

// ----------- actualizar elementos :p

titulo.textContent = "Nuevo título modificado en JS" //cambiamos el contenido del h1.
titulo.style.color = "violet"; //asignamos estilos al nuevo título.

// ------------ eliminar elementos :p

const parrafoEliminado = document.getElementById("miParrafo");
contenedor.removeChild(parrafoEliminado); //quitamos el párrafo creado.

// ---- edición de estilos :p


const p1 = document.getElementById("p1");
p1.style.backgroundColor = "yellow";
p1.style.fontSize = "20px";
p1.style.fontFamily = "sans-serif";

const estilo = document.createElement("style");
estilo.textContent = `
    .dinamico {
    color: green;
    font-size: 18px;
    } 
`; //creamos un elemento llamado estilo que tiene una clase llamada dinamico.

document.head.appendChild(estilo); //subimos estilo a nuestro HTML.
document.getElementById("p3").classList.add("dinamico"); // seleccionamos el elemento p3 y le agregamos la nueva clase.


// ------ lógica con el DOM :p

const lista = document.getElementById("lista"); //seleccionamos un elemento con iD lista 
const frutas = ["Manzana", "Banana", "Pera"]; //asigamos un array a la constante

// Crear un <li> por cada fruta
frutas.forEach(fruta => {
    const li = document.createElement("li"); // se crea el li
    li.textContent = fruta; // decimos que el texto de li será igual a uno de los elementos del array
    lista.appendChild(li); //subimos li a la lista
});

// Lógica condicional
if (frutas.includes("Pera")) {
    alert("¡La lista contiene Pera!");
} //si nuestra lista tiene la palabra "Pera", entonces se muestra la alerta :3

// ----- usando querySelector :p

//querySelector nos permite seleccionar elementos con la sintaxis de CSS, es decir, por iD, clase, etiqueta.

// querySelector con iD
const titulo2 = document.querySelector("#titulo2");
titulo2.textContent = "titulo modificado JS :3"

//querySelectorAll con clases (permite seleccionar varios elementos)
const textos = document.querySelector(".texto");

//querySelector con etiqueta
const span = document.querySelector("span")
span.textContent = "span nuevo JS"

//combinando selectores
const parrafoDentroDiv = document.querySelector("div span");
console.log(textos.textContent, span.textContent); // párrafo query span nuevo JS

// ----- Eventos en el DOM

const boton = document.getElementById("boton"); //seleccionamos nuestro boton

boton.onclick = () => {
    alert("¡Hiciste clic en el botón!");
}; // la alerta funcionará al dar click en el btn

// seleccionamos un segundo boton
const btn = document.getElementById("btn");

btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "lightblue"; 
}); 

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
});

// ------ Web Storage en DOM

//guardar datos en el LocalStorage

localStorage.setItem("usuario", "Laura");
console.log(localStorage.getItem("usuario")); // Laura

sessionStorage.setItem("token", "12345");
console.log(sessionStorage.getItem("token")); // 12345

//eliminando datos
localStorage.removeItem("usuario"); // Borra una clave
sessionStorage.clear(); // Borra todo

// guardando objetos

const persona = { nombre: "Sofía", edad: 18 };
localStorage.setItem("persona", JSON.stringify(persona)); //JSON.stringify convertimos un objeto a un string.

const personaGuardada = JSON.parse(localStorage.getItem("persona")); //JSON.parse convertimos un string a objeto.
console.log(personaGuardada.nombre); // Sofía