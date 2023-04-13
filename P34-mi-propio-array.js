/*
En este desafío, tendrás la oportunidad de desarrollar tus habilidades al construir tu propio array mediante el uso de clases.

Tu objetivo es crear una clase que sea similar a un array nativo del lenguaje, pero sin utilizar métodos ya existentes.

Entre los métodos disponibles en los arrays nativos, solo deberás implementar la lógica de los siguientes: map, filter, join, push, pop, shift, y unshift.

No podrás usar los corchetes [], aquí entenderás porque los arrays se consideran objetos ¡Buena suerte!

Ejemplo 1:


Input:

const myArray = new MyArray()

myArray.push(1);
myArray.push(2);
myArray.push(3);

console.log(myArray.data)

Output: { 0: 1, 1: 2, 2: 3 }

Ejemplo 2:


Input:

const myArray = new MyArray()

myArray.push("Platzinauta");
myArray.unshift("Hola!")

console.log(myArray.data)

Output: { 0: "Hola!", 1: "Platzinauta" }
*/

//Mi solución
export class MyArray {
  constructor() {
    // Tu código aquí 👈
    this.data = {};
    this.length = 0;
  }

  map(func) {
    // Tu código aquí 👈
    let copy = { ...this.data };

    for (elem in copy) {
      func(copy[elem]);
    }

    return copy;
  }

  filter(func) {
    // Tu código aquí 👈
    let contador = 0;
    let copy = {};

    for (elem in this.data) {
      if (func(data[elem])) {
        copy[contador] = elem;
        contador++;
      }
    }

    return copy;
  }

  push(item) {
    // Tu código aquí 👈
  }

  pop() {
    // Tu código aquí 👈
  }

  join(character = ",") {
    // Tu código aquí 👈
  }

  shift() {
    // Tu código aquí 👈
  }

  unshift(item) {
    // Tu código aquí 👈
  }
}
