/* Escribir una función que retorne la suma de n números */
const sum = array => {
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
};

console.log(sum([1,10])); //output 11

console.log(sum([10,30])); //output 40

console.log(sum([1,2,3,4,5])); //output 15

console.log(sum([1,2,3])); //output 6