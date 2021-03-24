/* Explicar que hace esta función y hacerla funcionar */
/**
 * Filtra una coleccion de datos segun su edad siempre y cuando la edad que indica dentro del objeto sea mayor o igual a la edad indicada en el parametro
 * @param {Array} coleccion 
 * @param {Int} edad 
 * @returns {Array}
 */
function filtraPorEdad(coleccion, edad) {
    let filtro = coleccion.filter(item => edad <= item.edad );
    return filtro;  
}

const obj = [
    {
        name:'Algo',
        edad:11
    },
    {
        name:'Algo 2',
        edad:20
    },
    {
        name:'Algo 3',
        edad:15
    }
];

console.log(filtraPorEdad(obj,15));