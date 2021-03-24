/* ¿Qué pasa con este código?, ¿Qué imprime la consola?, ¿error? ¿100? ¿undefined?  */
/**
 * Retornara el valor de a debido a que a es declarado antes de ejecutar la funcion
 */
function foo() {

    return a;
  
  }
  
  let a = 100;
  
  console.log(foo());
  
  
  