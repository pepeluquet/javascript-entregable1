// La fórmula para calcular el índice de masa corporal (IMC) es IMC = peso (kg) / estatura (m)*2

// Interpretación de los resultados
// El IMC es una manera estándar de determinar si una persona tiene un peso adecuado en relación a su estatura. Los rangos de IMC son: 
// Bajo: menos de 18.5
// Normal: 18.5 – 24.9
// Sobrepeso: 25.0 – 29.9
// Obesidad : mas de 30.0 

const alumnos = [];

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let edad = prompt("Ingrese su edad: ");
let peso = prompt ("Ingrese su peso: ");
let altura = prompt("Ingrese su altura (en metros): ");

function imc(peso , altura){
    return peso / ((altura/100) ** 2);
};

let resultado = imc(peso, altura);

console.log (nombre)
console.log (apellido)
console.log (edad)
console.log (peso)
console.log (altura)
console.log (resultado)
console.log ("Tu Indice de Masa Corporal es: "+ resultado);

if (resultado < 18.5) {
    console.log("Tienes un indice de masa corporal BAJO");
} else if (18.6 < resultado < 24.9) {
    console.log("Tienes un indice de masa corporal NORMAL");
} else if (25 < resultado < 29.9) {
    console.log("Tienes un indice de masa corporal SOBREPESO");
} else {
    console.log("Tienes un indice de masa corporal OBESIDAD")
};

alumnos.push = ({
    nombre, apellido, edad, peso, altura, resultado,
});
console.log(alumnos)