/* Que imprime en consola y por que */
/**
 * Imprimira Benja, esto debido a que ambos objetos se almacenan en el mismo espacio de memoria, al declararse b de esa forma, solo apunta al espacio de memoria de a
 * más no a un espacio de memoria distinto aunque con contenido replicado de a.
 */
let a = { name: 'Mau' };

let b = a;

b.name = 'Benja';

console.log(a.name, b.name);