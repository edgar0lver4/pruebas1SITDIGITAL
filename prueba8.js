/* Hacer una función donde me valide si un string es palindromo  */
/**
 * @function isPalindrome
 * @param {String} text - Texto a analizar 
 * @returns {Boolean} - True si son iguales o false si no
 * @description Esta funcion ve si un texto es un palindromo o no utilizando regex y reverse para mejorar el texto y hacer comparaciones
 */
const isPalindrome = text =>{ 
    let regex = / /gi; //Regex para borrar los espacios en el texto
    let original = text.toLowerCase().replace(regex,""); //Tomamos el texto y lo pasamos a minusculas, despues borramos los espacios
    let reverso = text.toLowerCase().replace(regex,""); //Haremos una copia del texto
    original = original.split(""); //El texto ya mejorado, lo volvemos un arrglo
    reverso = reverso.split("").reverse(); //Al areglo reverso lo ordenamos de forma inversa
    //Por ultimo con join juntamos el texto y devolveremos si son el mismo o no
    return original.join() === reverso.join();
}


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

