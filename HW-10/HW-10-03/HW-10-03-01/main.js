let age = prompt('How old are you?');
    
switch (true) {
    case age >= 0 && age < 12:
      alert( 'You are child.' );
      break;
    case age >= 12 && age < 18:
      alert( 'You are teenager.' );
      break;
    case age >= 18 && age < 60:
      alert( 'You are adult.' );
      break;
    case age >= 60:
      alert( 'You are pensioner.' );
      break;
    default:
      alert( 'Such an age is impossible. Try again.' );
  }

  
// if ((age >= 0) && (age < 12 )) {
//     alert( 'You are child.' );
// }else if ((age >= 12) && (age < 18 )) {
//     alert( 'You are teenager.' );
// }else if ((age >= 18) && (age < 60 )) {
//     alert( 'You are adult.' );
// }else if (age >= 60) {
//     alert( 'You are pensioner.' );
// }