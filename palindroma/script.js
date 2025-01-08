// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// immissione parola utente
let Parola = prompt("inserisci una parola")
// mostra la parola a schermo
console.log(RevertaParola(Parola));


// Determino la funzione 
function RevertaParola(stringa) {

    // definisco la variabile per la parola invertita
    let ParolaInvertita = stringa.split("").reverse().join("");

    // condizione per parola palindroma
    if (Parola === ParolaInvertita) {
        
        console.log('La parola inserita è palindroma')
        return Parola

    } else {
        
        console.log('La parola inserita non è palindroma')
        return Parola
    }
}


