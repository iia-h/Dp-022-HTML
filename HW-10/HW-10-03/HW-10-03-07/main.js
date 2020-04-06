let buy = prompt('Enter the purchase amount.');

switch (true) {
    case buy >= 200 && buy < 300:
      alert( '3% off' );
      break;
    case buy >= 300 && buy < 500:
      alert( '5% off' );
      break;
    case  buy>= 500:
      alert( '7% off' );
      break;
    default:
      alert( 'No discount.' );
  }

    
// if ( buy >= 200 && buy < 300 ) {
//     alert( '3% off' );
// }else if ( buy >= 300 && buy < 500 ) {
//     alert( '5% off' );
// }else if ( buy>= 500 ) {
//     alert( '7% off' );
// }else {
//     alert( 'No discount' );
// }


