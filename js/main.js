console.log ("Bienvenido a carga de Alumnos")

const alumnos = [];

// La fórmula para calcular el índice de masa corporal (IMC) es IMC = peso (kg) / estatura (m)*2
function imc(peso , altura){
    return peso / ((altura/100) ** 2);
};

// La formula para medir el índice cintura-cadera (ICC) es ICC = perímetro de la cintura / perímetro de la cadera
function icc(cintura , cadera){
    return cintura / cadera;
};

function saludo(nombre, apellido) {
    alert("Bienvenido "+ nombre + " " + apellido);
};

let continuar = true
while (continuar) {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    saludo(nombre, apellido)
    let sexo = prompt("Indique su sexo segun del dni (f/m): ")
    let edad = parseInt(prompt("Ingrese su edad: "));
    let peso = parseInt(prompt ("Ingrese su peso: "));
    let altura = parseInt(prompt("Ingrese su altura (en centimetros): "));

    imc(peso , altura);
    let resultadoImc = imc(peso, altura);
        // Interpretación de los resultados
        // El IMC es una manera estándar de determinar si una persona tiene un peso adecuado en relación a su estatura. 
        // Los rangos de IMC son: 
        // Bajo: menos de 18.5
        // Normal: 18.5 – 24.9
        // Sobrepeso: 25.0 – 29.9
        // Obesidad : mas de 30.0     
    console.log ("Tu Indice de Masa Corporal es: "+ resultadoImc);

    if (resultadoImc < 18.5) {
        alert("Tienes un indice de masa corporal BAJO");
    } else if (18.6 < resultadoImc < 24.9) {
        alert("Tienes un indice de masa corporal NORMAL");
    } else if (25 < resultadoImc < 29.9) {
        alert("Tienes un indice de masa corporal SOBREPESO");
    } else {
        alert("Tienes un indice de masa corporal OBESIDAD")
    };

    let cintura = parseInt(prompt("Ingrese la medida de la cintura (en centimetros): "))
    let cadera = parseInt(prompt("Ingrese la medida de la cadera (en centimetros): "))
    
    icc(cintura, cadera);
    let resultadoIcc = icc(cintura, cadera);
    
        // Clasificación	    Hombres (ICC)	Mujeres (ICC)
        // Bajo riesgo	        < 0.9	        < 0.85
        // Riesgo moderado	    0.9 – 1.0	    0.85 – 0.9
        // Alto riesgo	        > 1.0	        > 0.9
    console.log ("Tu Indice Cintura-Cadera es: "+ resultadoIcc);

    if (sexo == "m"){
        if (resultadoIcc < 0.89) {
            alert("Tienes un indice cintura/cadera de BAJO RIESGO");
        } else if (0.9 < resultadoIcc < 1.0) {
            alert("Tienes un indice de cintura/cadera de RIESGO MODERA");
        } else {
            alert("Tienes un indice de cintura/cadera de ALTO RIESGO");
        };
    } else if (sexo == "f"){
        if (resultadoIcc < 0.849) {
            alert("Tienes un indice cintura/cadera de BAJO RIESGO");
        } else if (0.85 < resultadoIcc < 0.9) {
            alert("Tienes un indice de cintura/cadera de RIESGO MODERA");
        } else {
            alert("Tienes un indice de cintura/cadera de ALTO RIESGO");
        };
    } else {
        alert("El dato del sexo era necesario para el resultado del ICC")
    }

    alumnos.push({
        nombre, apellido, edad, peso, altura, resultadoImc, resultadoIcc,
    });

    let confirmacion = prompt("Desea hacer otra carga? (si/no)")
    if ( confirmacion == "no") {
        continuar = false
        console.log("Muchas gracias")
    }
}
console.log(alumnos)