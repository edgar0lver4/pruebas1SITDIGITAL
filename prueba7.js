/* ¿Qué pasa con este código?, ¿Qué imprime la consola?, ¿error? ¿100? ¿undefined?  */
/**
 * Retornara el valor de a debido a que la funcion esta declarada dentro del scope que contiene a "a"
 */
function foo() {

    return a;
  
  }
  
  let a = 100;
  
  console.log(foo());
  
  
  