console.log ("Bienvenido a carga de Alumnos")

const alumnos = [];

// La fórmula para calcular el índice de masa corporal (IMC) es IMC = peso (kg) / estatura (m)*2
function imc(peso , altura){
    return peso / ((altura/100) ** 2);
};

function saludo(nombre, apellido) {
    alert("Bienvenido "+ nombre + " " + apellido);
};

let continuar = true
while (continuar) {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    saludo(nombre, apellido)
    let edad = parseInt(prompt("Ingrese su edad: "));
    let peso = parseInt(prompt ("Ingrese su peso: "));
    let altura = parseInt(prompt("Ingrese su altura (en centimetros): "));

    imc(peso , altura);

    let resultado = imc(peso, altura);

    console.log ("Tu Indice de Masa Corporal es: "+ resultado);

    // Interpretación de los resultados
    // El IMC es una manera estándar de determinar si una persona tiene un peso adecuado en relación a su estatura. Los rangos de IMC son: 
    // Bajo: menos de 18.5
    // Normal: 18.5 – 24.9
    // Sobrepeso: 25.0 – 29.9
    // Obesidad : mas de 30.0 

    if (resultado < 18.5) {
        console.log("Tienes un indice de masa corporal BAJO");
        alert("Tienes un indice de masa corporal BAJO");
    } else if (18.6 < resultado < 24.9) {
        console.log("Tienes un indice de masa corporal NORMAL");
        alert("Tienes un indice de masa corporal NORMAL");
    } else if (25 < resultado < 29.9) {
        console.log("Tienes un indice de masa corporal SOBREPESO");
        alert("Tienes un indice de masa corporal SOBREPESO");
    } else {
        console.log("Tienes un indice de masa corporal OBESIDAD")
        alert("Tienes un indice de masa corporal OBESIDAD")
    };
    
    alumnos.push = ({
        nombre, apellido, edad, peso, altura, resultado,
    });

    let confirmacion = prompt("Desea hacer otra carga? (si/no)")
    if ( confirmacion == "no") {
        continuar = false
        console.log("Muchas gracias")
    }
}
console.log(alumnos)
