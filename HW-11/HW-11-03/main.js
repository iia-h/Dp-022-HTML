let str = prompt('Enter the sentence.');
let array = str.split(' '); //разбивает строку на массив
let lengths = array.map(element => element.length); //преобразов. каждого элемента в его длину / 'стрелочные' функции
let result = Math.min(...lengths);

alert(result);


// let lengths = array.map(function(element){
//   return element.length;
//   });
  