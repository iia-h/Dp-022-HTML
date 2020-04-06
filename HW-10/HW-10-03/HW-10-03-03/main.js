let number = prompt('Enter the three-digit number.');

if ((number[0] == number[1]) && (number[0] == number[2])) {
    alert( 'All three numbers are the same.' );
}else if (number[0] == number[1]) {
    alert( 'First and second numbers are the same.' );
}else if (number[0] == number[2]) {
    alert( 'First and third numbers are the same.' );
}else if (number[1] == number[2]) {
    alert( 'Second and third numbers are the same.' );
}else {
    alert( 'All numbers are different.' );
}