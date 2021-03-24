/* Hacer una función donde me valide si un string es palindromo  */

const isPalindrome = text => text.toLowerCase().replace(/ /gi,"").split('').join() === text.toLowerCase().replace(/ /gi,"").split('').slice().reverse().join();


console.log(isPalindrome('oro'));

console.log(isPalindrome('reconocer'));

console.log(isPalindrome('sometamos'));

console.log(isPalindrome('animal'));

console.log(isPalindrome('animal a lamina'));

console.log(isPalindrome('1234567890987654321'));
//Parte dos del ejercicio de arriba

//Test

console.log(isPalindrome('Al reparto sacas otra perla'));

console.log(isPalindrome('Allí vez Sevilla'));

console.log(isPalindrome('Asi revelara su amada dama usar aleve risa'));

