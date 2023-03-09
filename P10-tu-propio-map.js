/*
En este desafío debes desarrollar una implementación personalizada del método map utilizando funciones de orden superior.

Recibirás como parámetros un array y una función (func). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) y la función se utilizará para aplicar una acción sobre cada elemento del array. Tu objetivo es devolver un nuevo array con los resultados de la función tal y como lo haría el método map.

Ejemplo 1:

Input: myMap([1,2,3,4], (num) => num * 2)

Output: [2,4,6,8]

Ejemplo 2:

Input: myMap([
  {name: "michi", age: 2},
  {name: "firulais", age: 6}],
  (pet) => pet.name)

Output: ["michi", "firulais"]
*/

//Mi solucion
export function myMap(array, func) {
  // Tu código aquí 👈
  const nuevoArray = [];

  for (let i = 0; i < array.length; i++){
    nuevoArray[i] = func(array[i]);
  }

  return nuevoArray;
}

//solucion de Platzi 
function myMap(array, func) {
  // Creamos el array que retornaremos
  // Inicialmente está vacío 
  const rta = [];
  for (let i = 0; i < array.length; i++) {
    // Luego iteramos por cada elemento del array
    const element = array[i];

    // Y lo vamos pasando al array vacío después de ejecutar 
    // la función sobre cada elemento del array
    rta.push(func(element));

    // Es importante recalcar que en ningún momento modificamos el array original 
  }

  // Al final lo retornamos
  return rta;
}
