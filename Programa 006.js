let filas = 4; // Número de filas del triángulo

// Parte superior del triángulo
for (let i = 1; i <= filas; i++) {
    console.log("#".repeat(i));
}

// Parte inferior del triángulo
for (let i = filas - 1; i >= 1; i--) {
    console.log("#".repeat(i));
}
