let filas = 4; // Número de filas del triángulo

for (let i = 1; i <= filas; i++) {
    let espacios = " ".repeat(filas - i);
    let caracteres = "#".repeat(i); 
    console.log(espacios + caracteres);
}
