/*
Implementa la lógica para proteger un objeto de cambios.

En este desafío, debes implementar la lógica de la función llamada protectDog que reciba como parámetro los datos de un perro como objeto.

La función debe crear una copia del objeto original utilizando el método Object.assign, almacenarla en una variable y luego congelar la copia utilizando el método Object.freeze para evitar cualquier cambio en sus propiedades, incluyendo los objetos anidados.

De esta manera, el objeto original no se verá afectado y todos los objetos anidados también serán protegidos de ser modificados.

Ejemplo 1:

Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.name = "Toro"
protectedDog.name // "Romeo"

Ejemplo 2:

Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.owner.name = "Pedro"
protectedDog.owner.name // "Victor"
*/

//Mi solucion
const copiedDog = Object.assign({}, dog);
  Object.freeze(copiedDog);

  for (let property in copiedDog) {
    if (typeof copiedDog.property === "object") Object.freeze(property);
  }

  return copiedDog;
}

//Solucion de Platzi
export function protectDog(dog) {
  const copy = Object.assign({}, dog);
  const propertiesToProtect = ["owner", "favoriteFood", "activities"];

  function freezeRecursively(obj) {
    Object.freeze(obj);
    for (const prop of Object.getOwnPropertyNames(obj)) {
      if (propertiesToProtect.includes(prop) && typeof obj[prop] === "object") {
        freezeRecursively(obj[prop]);
      }
    }
  }

  freezeRecursively(copy);
  return copy;
}
