const IVA = 0.05; // IVA del 5%

let numeroProductos = parseInt(prompt("Ingresa el número de productos:"));
let costos = [];
let sumaCostos = 0;

// Solicitar el costo de cada producto
for (let i = 0; i < numeroProductos; i++) {
    let costoProducto = parseFloat(prompt(`Ingresa el costo del producto ${i + 1}:`));
    if (isNaN(costoProducto) || costoProducto <= 0) {
        alert("Por favor ingresa un costo válido para cada producto.");
        i--; // Si el valor es inválido, volvemos a solicitar el mismo producto
    } else {
        costos.push(costoProducto);
        sumaCostos += costoProducto;
    }
}

// Mostrar lista de productos y costos
document.writeln(`Lista de productos con sus costos: ${costos.join(", ")}<br>`);
document.writeln(`Sumatoria de los costos: $${sumaCostos.toFixed(2)}<br>`);

document.writeln(`Costo total sin descuento aplicado y sin IVA: $${sumaCostos.toFixed(2)}<br>`);


// Aplicar descuento según el total
let descuento = 0;
if (sumaCostos >= 2000 && sumaCostos <= 3999) {
    descuento = 0.25; // 25% de descuento
} else if (sumaCostos >= 4000 && sumaCostos <= 5999) {
    descuento = 0.40; // 40% de descuento
} else if (sumaCostos >= 6000) {
    descuento = 0.50; // 50% de descuento
}

let totalConDescuento = sumaCostos - (sumaCostos * descuento);
document.writeln(`Costo total con descuento aplicado sin IVA: $${totalConDescuento.toFixed(2)}<br>`);

// Aplicar IVA
let totalConIva = totalConDescuento + (totalConDescuento * IVA);
document.writeln(`Costo total con descuento aplicado y con IVA (5%): $${totalConIva.toFixed(2)}<br>`);
