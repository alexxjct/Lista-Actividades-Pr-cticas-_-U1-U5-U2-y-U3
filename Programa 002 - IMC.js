//Variables

let nombre = prompt("Ingresa tu nombre")
//tipo numero
let peso = Number(prompt("Ingresa tu peso en kilogramos"));
let altura = Number(prompt("Ingresa tu altura en metros"));

let resul = peso / (altura * altura);

//Salida de Información

//tipo numero
console.log("resultado es "+ resul);
document.writeln(`HOLA : ${nombre}`);
document.writeln(`<BR>TU PESO ES ${peso} kilos`);
document.writeln(`<BR>TU ESTATURA ES ES ${altura} metros`);
document.writeln(`<BR>TU INDICE DE MASA CORPORAL ES ${resul}<BR>`);


if (resul >= 0 && resul < 18.5) {
    document.writeln("Come más papa, no estás en Venezuela");
} else if (resul >= 18.5 && resul < 24.9) {
    document.writeln("vas bien, sigue asi por ella");
} else if (resul >= 24.9 && resul < 30) {
    document.writeln("al menos sal a caminar");
} else if (resul >= 30 && resul < 34.9) {
    document.writeln("deja de comer y sal a correr");
} else if (resul >= 34.9 && resul < 39.9) {
    document.writeln("estas cerca de ser la cena de navidad");
} else if (resul >= 39.9) {
    document.writeln("usaran grua para moverte");
}