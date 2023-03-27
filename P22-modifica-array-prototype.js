/*
En este desafío, deberás crear tu propia implementación de filter para el prototype de los arrays.

Esto implica agregar un nuevo método llamado myFilter al prototype de los arrays, el cual permitirá filtrar elementos de manera similar al método filter nativo del lenguaje. El objetivo es poder usar el método myFilter de la siguiente manera:

Ejemplo 1:


Input:

const array = [1,2,3,4,5,6]

array.myFilter(num => num % 2 === 0)

Output: [2,4,6]

Ejemplo 2:


Input:

const arr = [
  {
    name: "Juan",
    age: 10,
  },
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
];

array.myFilter((person) => person.age > 18)

Output: [
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
]
*/

//Mi solución
export function arrayModified() {
  // Tu código aquí 👈
  Array.prototype.myFilter = function (fun) {
    const filtrados = [];

    for (let i = 0; i < this.length; i++){
      if (fun(this[i])) filtrados.push(this[i]);
    }

    return filtrados;
  }
}

//Solución alternativa sin usar el metodo push.
export function arrayModified() {
  Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        newArray[newArray.length] = this[i]
      }
    }
    return newArray;
  };
}
