/* Explicar y ejecutar la siguiente función */

/**
 * Basicamente es una funcion que internamente retorna otra funcion en este caso ambas funciones están parametricadas, y esta ultima función retorna el modulo de un número
 */

let divisible = mod => num => num % mod;

console.log(divisible(3)(10));