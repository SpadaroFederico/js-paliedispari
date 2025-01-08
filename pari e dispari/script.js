// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Richiesta all'utente di un numero
let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5"), 10);

// Verifica che il numero inserito sia nel range corretto
if (numeroUtente > 5 || numeroUtente < 1 || isNaN(numeroUtente)) {
    throw new Error("Errore: il numero inserito è fuori dal range 1-5.");
} else {
    console.log(`Hai scelto il numero: ${numeroUtente}`);
}

// Richiesta all'utente di pari o dispari
let paridispari = prompt("Scegli tra pari e dispari").toLowerCase();

// Verifica che l'input sia corretto
if (paridispari !== "pari" && paridispari !== "dispari") {
    throw new Error("Errore: hai digitato qualcosa di diverso, inserisci solo 'pari' o 'dispari'.");
} else {
    console.log(`Hai scelto: ${paridispari}`);
}

// Funzione per generare un numero casuale tra 1 e 5
function generaNumRandom(numMax, numMin) {
    return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}

// Genera un numero casuale per il computer
const numeroGenerato = generaNumRandom(5, 1);
console.log(`Il computer ha scelto il numero: ${numeroGenerato}`);

// Funzione per sommare due numeri
function sommaNumeri(num1, num2) {
    return num1 + num2;
}

// Somma dei numeri
const somma = sommaNumeri(numeroUtente, numeroGenerato);
console.log(`La somma dei due numeri è: ${somma}`);

// Funzione per verificare se un numero è pari
function verificaPari(num) {
    return num % 2 === 0 ? "pari" : "dispari";
}

// Determina se la somma è pari o dispari
const risultato = verificaPari(somma);
console.log(`La somma è: ${risultato}`);

// Determina il vincitore
if (risultato === paridispari) {
    console.log("Complimenti! Hai vinto!");
} else {
    console.log("Mi dispiace, il computer ha vinto.");
}
