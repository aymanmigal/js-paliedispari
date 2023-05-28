//DEFINISCO LA FUNZIONE CHE GENERA IL NUMERO RANDOM
function randomNumber(){
    return Math.floor(Math.random() * 6);
}

//DEFINISCO LA FUNZIONE CHE STABILISCE SE LA SOMMA DEI NUMERI E' PARI O DISPARI
function checkOddEven(num){
    if(num % 2 === 0){
        return "pari";
    }
        return "dispari";
    
}


//PERMETTERE ALL'UTENTE SCELTA PARI O DISPARI
let choice = prompt('Scegliere "pari" o "dispari"');

//PERMETTERE ALL'UTENTE SCELTA NUMERO DA 1 A 5
let number = parseInt(prompt('Inserire un numero da 1 a 5'));



//CONTROLLO CONFIRMITA' VALORE INSERITO (PARI O DISPARI)
while (choice !== 'pari' && choice !== 'dispari'){
    choice = prompt('Inserisci nuovamente la parola chiave "pari" o "dispari"');
}

//CONTROLLO CONFIRMITA' VALORE INSERITO (NUMERO DA 1 A 5)
while(isNaN(number) || number < 1 || number > 5){
    number = prompt('Inserisci nuovamente il numero da 1 a 5')
}

//DEFINISCO VARIABILE CHE CONTIENE IL NUMERO GENERATO PER IL COMPUTER
let pc_number = randomNumber();


//ESEGUO SOMMA NUMERI
let somma = pc_number + number;
console.log(somma);



//RISULTATO FUNZIONE SOMMA 
let check_odd_even = checkOddEven(somma);

 
//CONTROLLO VINCITORE
if(check_odd_even === choice){
    console.log('Utente vince.')

}
else {
    console.log('Computer vince.')

}

