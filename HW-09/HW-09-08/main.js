let money = prompt( 'Enter the amount of money in your wallet.' );
let price = prompt( 'Enter the price of one chocolate bar.' );
let number = Math.floor( money / price );
let change = money - price * number;
alert('You can buy ' + number + ' chocolates. Your change will be ' + change + '$.' );