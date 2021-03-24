/* Escribir una función que retorne la suma de n números */
const sum = array => array.reduce((contador,array)=>contador+=array);

console.log(sum([1,10])); //output 11

console.log(sum([10,30])); //output 40

console.log(sum([1,2,3,4,5])); //output 15

console.log(sum([1,2,3])); //output 6