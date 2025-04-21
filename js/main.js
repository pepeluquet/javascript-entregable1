console.log ("Bienvenido a carga de Alumnos")
const alumnos = [];

class Alumno {
    static id = 0
    constructor (nombre, apellido, sexo, edad, peso, altura, cintura, cadera, resultadoImc, resultadoIcc) {
        this.id = ++Alumno.id,
        this.nombre = nombre
        this.apellido = apellido
        this.sexo = sexo
        this.edad = edad
        this.peso = peso
        this.altura =  altura
        this.cintura = cintura
        this.cadera = cadera
        this.resultadoImc = resultadoImc 
        this.resultadoIcc = resultadoImc
    }
}

// La fórmula para calcular el índice de masa corporal (IMC) es IMC = peso (kg) / estatura (m)*2
function imc(peso , altura){
    return peso / ((altura/100) ** 2);
};

// La formula para medir el índice cintura-cadera (ICC) es ICC = perímetro de la cintura / perímetro de la cadera
function icc(cintura , cadera){
    return cintura / cadera;
};

// cargarDatosUsuarios() que se encargue de pedir los prompts con los datos del usuario

const cargarDatosUsuarios = () =>{
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let sexo = prompt("Indique su sexo segun del dni (m/f): ")
    let edad = parseInt(prompt("Ingrese su edad: "));
    let peso = parseInt(prompt ("Ingrese su peso: "));
    let altura = parseInt(prompt("Ingrese su altura (en centimetros): "));
    return {nombre, apellido, sexo, edad, peso, altura};
}

// funsion que se encarga de dar los resultados IMC
// Interpretación de los resultados
// El IMC es una manera estándar de determinar si una persona tiene un peso adecuado en relación a su estatura. 
// Los rangos de IMC son: 
// Bajo: menos de 18.5
// Normal: 18.5 – 24.9
// Sobrepeso: 25.0 – 29.9
// Obesidad : mas de 30.0 

const informarIMC = (resultadoImc) => {
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
    return resultadoImc
}

// funsion que según el sexo que se ingresa, muestra los resultados de ICC
// Clasificación	    Hombres (ICC)	Mujeres (ICC)
// Bajo riesgo	        < 0.9	        < 0.85
// Riesgo moderado	    0.9 – 1.0	    0.85 – 0.9
// Alto riesgo	        > 1.0	        > 0.9

const informarICC = (sexo, resultadoIcc) => {
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
    };
    return resultadoIcc
}

let continuar = true
while (continuar) {

    // cargarDatosUsuarios()
    const { nombre, apellido, sexo, edad, peso, altura } = cargarDatosUsuarios();

    const resultadoImc = imc(peso, altura);
    informarIMC(resultadoImc)

    let cintura = parseInt(prompt("Ingrese la medida de la cintura (en centimetros): "))
    let cadera = parseInt(prompt("Ingrese la medida de la cadera (en centimetros): "))
    const resultadoIcc = icc(cintura, cadera);
    informarICC(sexo, resultadoIcc)

    alumnos.push({
        nombre, apellido, sexo, edad, peso, altura, cintura, cadera, resultadoImc, resultadoIcc,
    });

    let confirmacion = prompt("Desea hacer otra carga? (si/no)")
    if ( confirmacion == "no") {
        continuar = false
        console.log("Muchas gracias")
    }
}
console.log(alumnos)