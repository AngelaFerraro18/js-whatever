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


/*Esercizio 8
Scrivi una funzione che prenda una stringa come parametro e restituisca il numero di vocali presenti nella stringa.*/


const word = 'melaverde';

// let count = 0;

// const vowels = 'aeiou';

// for (let i = 0; i < word.length; i++){

//     word.toLowerCase();

//     if (vowels.indexOf(word[i]) >= 0){
//         count++
//     }
// } console.log(count);


function countVowels(string){
    let count = 0;
    const vowels = 'aeiou';

    for (let i = 0; i < string.length; i++){

        string.toLowerCase();

        if (vowels.indexOf(string[i]) >= 0){
            count++
        }
    }
    return count;
}

console.log(countVowels(word));

/*Esercizio 9
Scrivi una funzione che prenda un array di numeri come parametro e restituisca la media di tutti gli elementi.*/

let numArray = [1, 5, 8, 15, 20];

// media aritmetica = somma di tutti i numeri / la quantità di numeri sommati
function arrayNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        sum += array[i];
        

    }
    return sum / array.length;
}

console.log(arrayNumbers(numArray));

// Esercizi vari

//Snack 1: - Conta i numeri dispari in un array
const numeri1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let count = 0;

for (let i = 0; i < numeri1.length; i++){
    
    const numero = numeri1[i];
    if (numero % 2 !== 0){
        count++
    }
}
console.log(`I numeri dispari sono ${count}`);

const oddNumbers = numeri1.filter(num =>{
    return num % 2 !== 0;
})

console.log (`I numeri dispari sono ${oddNumbers.length}`);

//Snack 2 - Trova il numero più grande in un array
const numeri2 = [23, 45, 67, 12, 89, 34];

let maxNumber = numeri2[0];

for (let i = 1; i < numeri2.length; i++){
    if(maxNumber < numeri2[i]){
        maxNumber = numeri2[i];
    }
}
console.log(`Il numero maggiore è ${maxNumber}`);

//Snack 3 - Calcola la media di un array
const numeri3 = [10, 20, 30, 40, 50];
let sum = 0;
let media = 0;
for (let i = 0; i < numeri3.length; i++){
    sum += numeri3[i];
    media = sum / numeri3.length;
}
console.log(`La media è ${media}`);

//Snack 4 - Conta quante volte appare un numero in un array
const numeri4 = [1, 2, 3, 4, 2, 3, 2, 5, 6, 2];

let countObj = {};

for (let i = 0; i < numeri4.length; i++){
    
    let numArr = numeri4[i];

    if (countObj[numArr]){
        countObj[numArr]++;
    } else {
        countObj[numArr] = 1;
    }
}console.log(countObj);




//Snack 5 - Trova il numero più piccolo in un array
const numeri5 = [23, 45, 67, 12, 89, 34];

let minNum = numeri5[0];

for (let i = 1; i < numeri5.length; i++){
    if (minNum > numeri5[i]){
        minNum = numeri5[i];
    }
}
console.log(`Il numero più piccolo è ${minNum}`);

//Snack 6 - Conta i Numeri Pari
const numeri6 = [1, 2, 3, 4, 5, 6, 7, 8];

let count3 = 0;

for (let i = 0; i < numeri6.length; i++){
    if (numeri6[i] % 2 === 0){
        count3++
    }
}
console.log(`Il numeri pari sono ${count3}`);

//Snack 7 - Somma di Tutti gli Elementi
const numeri7 = [5, 10, 15, 20];

let sum2 = 0;

for (let i = 0; i < numeri7.length; i++){
    sum2 += numeri7[i];
}
console.log(`La somma è ${sum2}`);

//Snack 8 - Calcola il Prodotto
const numeri8 = [2, 3, 4];

let prodotto = numeri8[0];

for (let i = 1; i < numeri8.length; i++){

    prodotto = prodotto * numeri8[i];
}
console.log(`Il prodotto è ${prodotto}`)

//Snack 9 - Verifica se un Numero è Primo
 function isPrimo(esNove) {
    for (let i = 2; i < esNove; i++){
        if (esNove % i === 0){
             return false;
        }
    }return true;
 }

 console.log(isPrimo(7)); // true
 console.log(isPrimo(10)); // false

//i numeri primi partono da 2 e sono divisibili per sè stessi e per 1


//Snack 10 - Rimuovi Numeri Pari da un Array
const numeri10 = [1, 2, 3, 4, 5, 6, 7];
const newArray2 = [];

for ( let i = 0; i < numeri10.length; i++){
    if (numeri10[i] % 2 !== 0){
        newArray2.push(numeri10[i]);
    }
}
console.log(newArray2);


const oddArray = numeri10.filter(num => {
    return num % 2 !== 0;
})
console.log(oddArray);
