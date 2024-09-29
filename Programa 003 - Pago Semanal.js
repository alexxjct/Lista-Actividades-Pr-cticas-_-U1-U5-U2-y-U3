let nombre = prompt("Ingresa tu nombre")
let pagoBase = prompt("Ingresa cual es tu pago base por hora")
let horasTrabajadas = prompt("Ingresa cuantas horas trabajaste")

if(horasTrabajadas >=1 && horasTrabajadas <=40){
	pagoTotal=pagoBase*horasTrabajadas
	document.writeln(nombre + " tu pago de esta semana es " + pagoTotal)
}
else if (horasTrabajadas >= 41 && horasTrabajadas <= 47){
	horasExtras=horasTrabajadas-40
	pagoTotal=(pagoBase*40)+(horasExtras*pagoBase*2)
	document.writeln(nombre + " tu pago de esta semana es " + pagoTotal)
}
else if (horasTrabajadas >= 48){
	horasExtras=horasTrabajadas-47
	pagoTotal=(pagoBase*40)+(2*(pagoBase*6))+(3*(pagoBase*horasExtras));
	document.writeln(nombre + " tu pago de esta semana es " + pagoTotal)
}
else{
	document.writeln("Ponte a chambear papi " + nombre)
}