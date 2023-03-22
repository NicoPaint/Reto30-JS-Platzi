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

//Mi solución. No entendi realmente como se debia hacer el ejercicio por lo que no pude solucionarlo.
export function protectDog(dog) {
  const copiedDog = Object.assign({}, dog);
  Object.freeze(copiedDog);

  for (let property in copiedDog) {
    if (typeof copiedDog.property === "object") Object.freeze(property);
  }

  return copiedDog;
}


//Solución de Platzi
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

//Otra solución 
export function protectDog(dog) {
  // Tu código aquí 👈
  const copia = Object.assign({}, dog);
  Object.freeze(copia);

  for (const key in copia) {
    const value = copia[key];
    if (typeof value === 'object') Object.freeze(value);
  }
  return copia;
}

//Mi corrección despues de analizar mi intento de solución y la "otra solución" que que si funcionó 
export function protectDog(dog) {
  const copiedDog = Object.assign({}, dog);
  Object.freeze(copiedDog);

  for (let property in copiedDog) {
    if (typeof copiedDog[property] === "object") Object.freeze(copiedDog[property]);  //Primero se cambió copiedDog.property por copiedDog[property] y segundo se cambió el argumento que se la pasó a la funcion Object.freeze() porque se estaba aplicando de manera incorrecta.
  }

  return copiedDog;
}
