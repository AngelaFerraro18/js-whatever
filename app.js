/*Esercizio 1
Scrivi una funzione che prenda due parametri, base e altezza, e restituisca l'area del rettangolo corrispondente.*/

//l'area del rettangolo si calcola: base * altezza

function rectangleArea(num1, num2) {

    const result = num1 * num2;
    return result;
}

console.log(rectangleArea(5, 10));


/*Esercizio 2
Scrivi una funzione che prenda un parametro numero e restituisca true se il numero è pari, altrimenti restituisca false.*/

function isNumberEven(num1) {

    if (num1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberEven(2));
console.log(isNumberEven(27));

/*Esercizio 3
Scrivi una funzione che prenda due parametri di tipo stringa e restituisca la loro concatenazione.*/

function twoStrings(string1, string2) {

    const result = string1 + string2;
    return result;
}

console.log(twoStrings('ciao', ' Angela'));

/*Esercizio 4
Scrivi una funzione che generi un numero casuale compreso tra un valore minimo e un valore massimo.*/

function randomNumber(min, max) {

    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

console.log(randomNumber(1, 10));

/*Esercizio 5
Scrivi una funzione che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.*/

function isPalindrome(string) {

    for (let i = 0; i < string.length / 2; i++) {

        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('osso'));

/*Esercizio 6
Scrivi una funzione che prenda un array di numeri come parametro e restituisca la somma di tutti gli elementi.*/


function sumArrayNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        sum += array[i];

    }
    return sum;
}


console.log(sumArrayNumbers([10, 25, 2, 5]));

/*Esercizio 7
Scrivi una funzione che prenda un array di numeri come parametro e restituisca un oggetto con le proprietà "massimo" e "minimo" che rappresentano rispettivamente il valore massimo e il valore minimo dell'array.*/


let pippo = [58, 26, 120, 20];

// let obj = {
//     minimo: '',
//     massimo: ''
// }
// let value = pippo[0];

// for (let i = 1; i < pippo.length; i++) {

//     if (value < pippo[i]) {
//        obj.minimo = value;
//         console.log(obj);
//     }
//     if (pippo[i] > value){
//         obj.massimo = pippo[i];
//         console.log(obj);
//     }
   
// } console.log(obj);


function minMaxValue(array){

    let obj = {
        minimo: '',
        massimo: ''
    };
    let value = array[0];

    for (let i = 1; i < array.length; i++) {

        if (value < array[i]) {
           obj.minimo = array[i];
        }
        if (value > array[i]){
            obj.massimo = array[i];
        }
       
    } return obj;
}

console.log(minMaxValue(pippo));