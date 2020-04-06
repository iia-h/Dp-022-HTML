let birth = prompt( 'Year of your birth' );
let now = new Date();
const nowYear = now.getFullYear();
let age = nowYear - birth;
alert( 'You are ' + age + '.');