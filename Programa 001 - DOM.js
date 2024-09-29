// Mostrar el Número de Artículos que existen en el Documento
let articulos = document.querySelectorAll("h3");
console.log("Número de artículos:", articulos.length);

// Identificar líneas divisorias dentro del Documento y número de líneas
let lineasDivisorias = document.querySelectorAll("hr");
console.log("Número de líneas divisorias:", lineasDivisorias.length);

// Identificar los elementos de lista dentro del Documento y número de elementos en total
let elementosLista = document.querySelectorAll("li");
console.log("Número total de elementos de lista:", elementosLista.length);

// Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista
let listaElementos = document.querySelectorAll("#elemen li");
console.log("Número de elementos en 'Lista Elementos':", listaElementos.length);

// Verificar si hay algún enlace dentro de la lista "Lista Elementos"
listaElementos.forEach((elemento) => {
    let enlace = elemento.querySelector("a");
    if (enlace) {
        console.log("Enlace dentro de 'Lista Elementos':", enlace.outerHTML);
    }
});

// Identificar elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista
let menuElementos = document.querySelectorAll("#menu li");
console.log("Número de elementos en 'Menú':", menuElementos.length);

let enlacesMenu = document.querySelectorAll("#menu a");
console.log("Número de enlaces en 'Menú':", enlacesMenu.length);

enlacesMenu.forEach((enlace, index) => {
    console.log(`Enlace ${index + 1} en 'Menú':`, enlace.outerHTML);
});

// Identificar imágenes dentro del Documento y número de imágenes en total
let imagenes = document.querySelectorAll("img");
console.log("Número total de imágenes:", imagenes.length);

// Identificar imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes dentro de este bloque
let imagenesArticulo2 = document.querySelectorAll(".imgAr2 img");
console.log("Número de imágenes en 'Artículo 2':", imagenesArticulo2.length);
if (imagenesArticulo2.length > 0) {
    console.log("Primera imagen del 'Artículo 2':", imagenesArticulo2[0].outerHTML);
}

// Identificar imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda y cuarta imagen del presente bloque
let imagenesArticulo3 = document.querySelectorAll("#imgAr3 img");
console.log("Número de imágenes en 'Artículo 3':", imagenesArticulo3.length);

if (imagenesArticulo3.length >= 2) {
    console.log("Segunda imagen en 'Artículo 3':", imagenesArticulo3[1].outerHTML);
}
if (imagenesArticulo3.length >= 4) {
    console.log("Cuarta imagen en 'Artículo 3':", imagenesArticulo3[3].outerHTML);
}

// Identificar enlaces del Documento y número de enlaces en total
let todosEnlaces = document.querySelectorAll("a");
console.log("Número total de enlaces en el Documento:", todosEnlaces.length);

// Identificar enlaces distribuidos dentro del párrafo referente al “Artículo 1” y número de enlaces
let enlacesArticulo1 = document.querySelectorAll("#text1 a");
console.log("Número de enlaces en el 'Artículo 1':", enlacesArticulo1.length);

enlacesArticulo1.forEach((enlace, index) => {
    console.log(`Enlace ${index + 1} en 'Artículo 1':`, enlace.outerHTML);
});
