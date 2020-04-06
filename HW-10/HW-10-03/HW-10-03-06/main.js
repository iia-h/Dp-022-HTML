let dollar = prompt( 'Enter quantity.', '$' );
let currency = prompt( 'Enter the currency.', 'EUR, UAH or AZN' );

let eur = .93;
let uah = 27.42;
let azn = 1.70;

if ( currency == 'EUR' ) {
    alert ( dollar * eur + ' EUR ' );
}else if ( currency == 'UAH' ) {
    alert( dollar * uah + ' UAH ' );
}else if ( currency == 'AZN' ) {
    alert( dollar * azn + ' AZN ' );
}else {
    alert( 'You entered the wrong currency. Try again.' );
}