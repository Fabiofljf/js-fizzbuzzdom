//Scrivo un programma che stampi in console i numeri da 1 a 100.
for (i = 1; i <= 100; i++) {

    //se un numero è divisibile per 3 e da 0 è multiplo di 3. (Uso l'operatore testo %, che mi permette di dividere due numeri, controllando se il resto è uguale a 0). Quindi Se i è divisibile per 3 e per 5, scrivo: FizzBuzz AlTRIMENTI SE è divisibile solo per 3, scrivo: frizz ALTRIMENTI SE è divisibile solo per 5, scrivo: buzz ALTRIMENTI scrivo: il numero.
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('frizz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }

}