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

//Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

// Esempio:

// Input: a = 3, b = -1, c = 4, d = -2
// Output: maggiore = 4, minore = 2


const numbers4 = [2, 4, 76, 43];

let maxNum = numbers4[0];
let minNumb = numbers4[0];

for (let i = 1; i < numbers4.length; i++){
    if (maxNum > numbers4[i]){
        maxNum = numbers4[i];
    } else if(minNumb < numbers4[i]) {
        minNumb = numbers4[i];
    }
} console.log(`maggiore = ${maxNum} minimo = ${minNumb}`);

// Quanti anni ha?
// Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

// l’età della persona
// quanti anni sono necessari per raggiungere i 100
// Esempio:

// Input: anno corrente = 2021, anno di nascita = 1996
// Output: età = 25, anni mancanti = 75

let year = 2025;
let born = 1994;

let persona = {
    età: '',
    anniMancanti: ''
};

persona.età = year - born;
persona.anniMancanti = 100 - persona.età;
console.log(persona);

//Esercizio 3: Ciclo for
// Progetta un algoritmo in Javascript che stampi tutte le coppie di numeri naturali la cui somma è un numero intero a scelta.

// Esempio

// Input: numero 7
// Output: 
// - 0-7
// - 1-6
// - 2-5
// - 3-4
// - 4-3
// - 5-2
// - 6-1
// - 7-0

// x + y = S
let x;
let y;
let somma = 10;


for (let i = 0; i <= somma; i++){
    // console.log(i);
    x = i;
    y = somma - i;
    // console.log(x);
    // console.log(y);
    console.log(`${x} + ${y} = ${somma}`);
}

// Esercizio 4: metodo e proprietà
// Il conta cifre
// Scrivi un programma che dato un numero conti da quante cifre è formato.

// Esempio

// Input: numero: 245
// Output: numero cifre: 3

let numeroBoh = 5426;
let numeroStringa = numeroBoh.toString();
console.log(numeroStringa.length);


//Numeri pari
// Scrivi un programma che stampa tutti i numeri pari da 1 a 20.


for (let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Multipli di 3
// Stampa i numeri da 1 a 50, ma se un numero è multiplo di 3, stampa "Multiplo di 3" invece del numero.

for (let i = 1; i <= 50; i++){
    if( i % 3 === 0){
        console.log('Multiplo di 3');
    } else {
        console.log(i);
    }
}

// Somma dei numeri dispari
// Calcola e stampa la somma di tutti i numeri dispari da 1 a 100.

let summa = 0;

for (let i = 1; i <= 100; i++){
    if ( i % 2 !== 0){
        // console.log(i);
        summa = summa + i; //summa += i;
    }
} console.log(summa);

// Numeri primi tra 1 e 50
// Stampa tutti i numeri primi tra 1 e 50. (Un numero primo è divisibile solo per 1 e per sé stesso.)

for (let num = 2; num <= 50; num++){
   let primo = true;

   for (let i = 2; i < num; i++){
    if (num % i === 0){
        primo = false;
    }
   }

   if (primo){
    console.log(num);
   }
}

// //Conto alla rovescia con messaggi
// Stampa un conto alla rovescia da 10 a 0. Quando il numero è 5, stampa "Attenzione!", e quando arriva a 0, stampa "Boom!".

for (let i = 10; i >=0; i--){
    if ( i === 5){
        console.log('Attenzione');
    } else if (i === 0) {
        console.log('Boom');
    } else{
        console.log(i);
    }
}

// Sostituzione dei numeri
// Stampa i numeri da 1 a 30, ma:

// Se il numero è divisibile per 3, stampa "Fizz".
// Se è divisibile per 5, stampa "Buzz".
// Se è divisibile per entrambi, stampa "FizzBuzz".

let Fizz = 'Fizz';
let Buzz = 'Buzz';

for ( let i = 1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(Fizz + Buzz);
    } else if (i % 3 === 0){
        console.log(Fizz);
    } else if (i % 5 === 0){
        console.log(Buzz);
    } else {
        console.log(i);
    }
}

// Tabellina del 7
// Stampa la tabellina del 7 (da 7 × 1 fino a 7 × 10).

let tabellina = 7;

for (let i = 1; i <= 10; i++){
    // console.log(tabellina * i);
    console.log(`${tabellina} x ${i} = ${tabellina * i}`);
}

// Conta numeri positivi e negativi
// Dato un array di numeri, conta quanti sono positivi e quanti sono negativi, poi stampa il risultato. Esempio:
let numeri = [5, -3, 8, -2, 0, -7, 6, -1];

let countPos = 0;
let countNeg = 0;

for (let i = 0; i <= numeri.length; i++){
    if (numeri[i] < 0){
        countNeg++; //-3, -2, -7, -1
    } else if (numeri[i] >= 0){
        countPos++; //5, 8, 0, 6
    }
}
console.log(countPos);
console.log(countNeg);

// Numeri palindromi (da 10 a 200)
// Trova e stampa tutti i numeri palindromi tra 10 e 200. Un numero è palindromo se letto al contrario è uguale all'originale (es. 121, 131, 141).

for (let num = 10; num <= 200; num++){

    let stringNum = num.toString();
    let reversed = '';

    for (let i = stringNum.length - 1; i >= 0; i--){
        reversed += stringNum[i];
    }

    if (stringNum === reversed){
        console.log(num);
    }

}

// Somma dei numeri divisibili per 4
// Calcola e stampa la somma di tutti i numeri da 1 a 100 che sono divisibili per 4.
let sommaaa = 0;

for (let i = 1; i <= 100; i++){
    if (i % 4 === 0){
        // console.log(i);
        // sommaaa += i;
        console.log(`${i} + ${sommaaa} = ${sommaaa += i}`);
    }
}console.log(sommaaa);

// destructoring obj
const student = {
    name: 'Paolo',
    age: 30,
    email: 'me@meme.com'
};
let {age, email} = student;
const {name: newName} = student;
console.log(newName);
console.log(student);
console.log(age, email);
console.log(age);
console.log(email);
const emails = 'pappa@gatto.it';
const ages = 21

let students = {
    name: 'Paolo',
    ages,
    emails
};
console.log(students);