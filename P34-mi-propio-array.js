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

    for (const elem in copy) {
      copy[elem] = func(copy[elem]);
    }

    return copy;
  }

  filter(func) {
    // Tu código aquí 👈
    let contador = 0;
    let copy = {};

    for (const elem in this.data) {
      if (func(this.data[elem])) {
        copy[contador] = this.data[elem];
        contador++;
      }
    }

    return copy;
  }

  push(item) {
    // Tu código aquí 👈
    this.data[this.length] = item;
    this.length++;

    return this.length; 
  }

  pop() {
    // Tu código aquí 👈
    if (this.length === 0) return undefined;
    this.length--;

    const eliminado = this.data[this.length];
    let copy = {};

    for (let i = 0; i < this.length; i++) {
      copy[i] = this.data[i];
    }

    this.data = {};
    this.data = { ...copy };
    
    return eliminado;
  }

  join(character = ",") {
    // Tu código aquí 👈
    let newString = "";

    if (this.length === 1) {
      newString = this.data[this.length - 1];
    }
    else if (this.length >= 2) {
      let contador = 0;
      for (const elem in this.data) {
        contador++;
        if (contador === this.length) {
          newString += `${this.data[elem]}`;
          break;
        }
        newString += `${this.data[elem]}${character}`;
      }
    }

    return newString;
  }

  shift() {
    // Tu código aquí 👈
    if (this.length === 0) return undefined;
    this.length--;

    const eliminado = this.data[0];
    let copy = {};

    for (let i = 0; i < this.length; i++) {
      copy[i] = this.data[i + 1];
    }

    this.data = {};
    this.data = { ...copy };

    return eliminado;
  }

  unshift(item) {
    // Tu código aquí 👈
  }
}
