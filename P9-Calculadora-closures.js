/*
En este desafío tendrás que crear una calculadora mediante el uso de closures.

La calculadora debe contar con los siguientes métodos:

add: recibe un número, lo suma al total y devuelve el resultado
subtract: recibe un número, lo resta al total y devuelve el resultado
multiply: recibe un número, lo multiplica al total y devuelve el resultado
divide: recibe un número, lo divide al total y devuelve el resultado
clear: reinicia el total a 0 y devuelve el resultado
getTotal: devuelve el total actual.
Ejemplo 1:

Input:
const calculator = createCalculator()
calculator.add(10)

Output: 10

Ejemplo 2:

const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)

Output: 20

Ejemplo 3:

const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)
calculator.clear()

Output: 0
*/

//Mi solucion
export function createCalculator() {
  // Tu código aquí 👈
  let total = 0;

  return {
    add: function (numero) {
      return total += numero;
    },
    subtract: function (numero) {
      return total -= numero;
    },
    multiply: function (numero) {
      return total *= numero;
    },
    divide: function (numero) {
      return total /= numero;
    },
    clear: function () {
      total = 0;
      return total;
    },
    getTotal: function () {
      return total;
    },
  }
}

//La misma solucion utilizando arrow functions
export function createCalculator() {
  // Tu código aquí 👈
  let total = 0;

  return {
    add: numero => total += numero,
    subtract: numero => total -= numero,
    multiply: numero => total *= numero,
    divide: numero => total /= numero,
    clear: () => total = 0,
    getTotal: () => total,
  }
}

//Solucion de Platzi
function createCalculator() {
  // Primero declaramos nuestra variable privada
  // que tendrá un valor inicial de 0
  let total = 0;

  // dentro del return devolvemos las funciones que modifican la variable privada
  return {
    add(value) {
      // Para sumar, simplemente sumamos el valor al total
      // y retornamos el total
      total += value;
      return total;
    },

    subtract(value) {
     // Lo mismo con la resta 
      total -= value;
      return total;
    },

    multiply(value) {
      // Lo mismo con la multiplicación y división
      total *= value;
      return total;
    },

    divide(value) {
      total /= value;
      return total;
    },

    // Al final una función para reiniciar el valor a 0
    clear() {
      total = 0;
      return total;
    },

    getTotal() {
      // Y el total por si se quiere guardar el valor en otra variable en cierto momento
      return total;
    },
  };
}
