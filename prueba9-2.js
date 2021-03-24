/* Vamos a cambiar el arreglo:  */

let arr = [
    { nombre: 'Mauricio', edad: 10}, 
    {nombre: 'Benjamín', edad: 20}, 
    {nombre: 'Astrid',  edad: 17}, 
    {nombre: 'Angélica',  edad: 19}];
/**
 * 
 * @param {Array} coleccion - Lista de objetos a filtrar
 * @param {Integer} edad - Edad minima necesesaria
 * @returns 
 */
function filtraPorEdad(coleccion, edad) {
    let filtro = coleccion.filter(item => edad <= item.edad );
    return filtro;  
}
/* Crear una función llamada: "marcarHabilitados", donde debe aceptar un arreglo de objetos (para nuestro caso el resultado de filtraPorEdad),donde debe iterar y agregar una nueva propiedad habilitado = true */
function marcarHabilitados(coleccion){
    let arregloMarcado = [];
    coleccion.forEach(el =>{
        let newEl = el; 
        newEl["habilitado"] = true;
        arregloMarcado.push(newEl);
    });

    return arregloMarcado;
}

let edad = 18;

let filterArr = filtraPorEdad(arr, edad);

let habArr = marcarHabilitados(filterArr);

console.log(habArr); 

/* output 

[{nombre: 'Benjamín', edad: 20, habilitado: true}, {nombre: 'Angélica'  edad: 19, habilitado:true}]

*/
