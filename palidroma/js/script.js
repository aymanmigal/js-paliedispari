function checkPalindroma (parola){
    let palindroma = parola.split('').reverse().join('');

    if (palindroma.toLowerCase() === parola.toLowerCase()){
        return true;
    }
       return false;
}

let parola = prompt('Inserire parola');

let check = checkPalindroma(parola);

if(check){
       console.log('La parola è palindroma.');
}

else {
       console.log('La parola non è palindroma.');
}
