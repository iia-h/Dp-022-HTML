let year = prompt('Enter the year.');

(year % 4 == 0) || (year % 400 == 0 ) && (year % 100 != 0) ? alert( year + ' is a leap year.' ) : alert( year + ' is not a leap year.' );



// if ((year % 4 == 0) || (year % 400 == 0 ) && (year % 100 != 0)) {
//     alert( year + ' is a leap year.' );
// }else {
//     alert( year + ' is not a leap year.' );
// }