//*Ciclos > Nos permiten ejercutar las mismas lineas de codigo una y otras de forma consecutiva

//* Ciclo White > Se va a seguir ejecutando hasta que su condicion ya no sea verdadera
//Util cuando no conocemos exactamente las veces que necesitamos ejecutar el codigo

// let gasTank = 50;

// while (gasTank > 0) {
//     console.log('Gasolina restante', gasTank);

//     gasTank --;

// }

// console.log('Se quedo barado mi pana');

//* Ciclo do While
//Siempre se garantioza que se va a ejecutar una vez

let gasTank = 50;

//do significa haz esto mientras el tanque de combustible sea mayor a 0
do {
    console.log('Gasolina restante', gasTank);

    gasTank --;

} while (gasTank > 0)

console.log('Se quedo barado mi pana');