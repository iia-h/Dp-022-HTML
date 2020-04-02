let yourNumber = prompt ( 'Enter any three-digit number.' );
let number = 0
while ( yourNumber > 0 ) {
    number = number * 10 + yourNumber % 10;
    yourNumber = ~~(yourNumber / 10);
}
alert ( number );