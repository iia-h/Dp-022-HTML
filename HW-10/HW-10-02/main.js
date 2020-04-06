do {
    num = prompt( 'Enter the integer N.' );
} while (( num>=10**6) || (num<0));

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
    
if ( sum1 == sum2 ) {
    alert( 'Yes');
}else {
    alert( 'No');
}