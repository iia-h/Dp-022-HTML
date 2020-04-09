let str = prompt('Enter DNA string «A» «C» «G» «T».');
let result = str.replace(/\w/g, function(a){
  if (a=='A') {
    return 'T'};
  if (a=='T') {
    return 'A'};
  if (a=='C') {
    return 'G'};
  if (a=='G') {
    return 'C'};
});
alert(result);
