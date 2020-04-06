do {
    L = prompt( 'Enter the length of the room from 1 to 1000.');
} while (( L>1000) || (L<=0));

do {
    W = prompt( 'Enter the width of the room from 1 to 1000.');
} while (( W>1000) || (W<=0));

do {
    H = prompt( 'Enter the height of the room from 1 to 1000.');
} while (( H>1000) || (H<=0));

let roomArea = L*H*2 + W*H*2;
let numberOfCans = Math.ceil( roomArea/16 );
alert( 'Min number of paint cans is ' + numberOfCans );

