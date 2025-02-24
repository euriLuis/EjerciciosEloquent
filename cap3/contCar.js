function contarBs(cadena, caracter) {

    let numOfBs = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracter) {
            numOfBs++;
        }
    }

    return numOfBs;
}

function contarCaracter(cadena, caracter) {

    let numOfCar = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracter) {
            numOfCar++;
        }
    }

    return numOfCar;
}

console.log(contarBs("BBuhfgBoafiioBrebfg"));
console.log(contarCaracter("BBuhfgBoafiioBrebfg", "f"));