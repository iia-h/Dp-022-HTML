let circumference = prompt( 'Enter circumference.' );
let perimeter = prompt( 'Enter square perimeter' );

let radius = circumference / 2 * 3.14;
let radiusTwo = perimeter / 8;

radius <= radiusTwo ? alert( 'The circle will fit in the specified square.' ) : alert( 'The circle will not fit in the specified square.' );

// if (radius <= radiusTwo){
//     alert( 'The circle will fit in the specified square.' );
// }else {
//     alert( 'The circle will not fit in the specified square.' );
// }