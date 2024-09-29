let ciclos = parseInt(prompt("Ingresa el número de ciclos:"));

if (isNaN(ciclos) || ciclos <= 0) {
    console.log("Por favor ingresa un número válido mayor a 0.");
} else {
    for (let i = 1; i <= ciclos; i++) {
        console.log("#".repeat(i));
    }
}
