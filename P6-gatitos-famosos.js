/*
En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

Recibirás un array de objetos que incluirán las siguientes propiedades:

name: nombre del gatito.
followers: un array de números, donde cada uno representa los seguidores de cada red social.
Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

Input: findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
])

Output: ["Luna"]

Ejemplo 2:

Input: findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])

Output: ["Milo", "Gizmo"]
*/

//Mi solucion
export function findFamousCats(cats) {
  // Tu código aquí 👈
  const masFamosos = [];
  if (cats !== []) {
    const suma = [];
    for(let i = 0; i < cats.length; i++) {
      suma.push(cats[i].followers.reduce((acumulador, numero) => acumulador + numero));
    }

    const max = suma.reduce((anterior, actual) => {
      if (anterior <= actual) {
        return actual;
      }
      else {
        return anterior;
      }
    });

    for (let i = 0; i < suma.length; i++) {
      if (suma[i] === max) {
        masFamosos.push(cats[i].name);
      }
    }
  }

  return masFamosos;
}

//Solucion de Platzi
export function findFamousCats(cats) {
  // Creamos un objeto en el cual guardaremos los nombres
  // de los gatitos y el número máximo de seguidores
  let famousStats = {
    // El array de nombres empieza vacío
    catNames: [],
    // Y el número máximo de seguidores en 0
    maxNumOfFollowers: 0,
  };

  for (let i = 0; i < cats.length; i++) {
    // Iteramos por cada gatito recibido en el array
    const cat = cats[i];
    // Obtenemos la suma total de seguidores con reduce
    const totalFollowers = cat.followers.reduce(
      (acum, currentVal) => acum + currentVal,
      0
    );
 
    // comparamos si el total de followers del actual gatito es IGUAL
    // al del objeto que declaramos al inicio
    if (totalFollowers === famousStats.maxNumOfFollowers) {
      // De ser así, solo agregamos el nombre del gatito
      famousStats.catNames.push(cat.name);
    }

    // Por otro lado, si es MAYOR
    if (totalFollowers > famousStats.maxNumOfFollowers) {
       // Reiniciamos el array de nombres
      famousStats.catNames = [];
       // Agregamos a nuestro gatito influencer
      famousStats.catNames.push(cat.name);
       // Para al final asignar el número máximo de seguidores
       // a la debida propiedad del objeto
      famousStats.maxNumOfFollowers = totalFollowers;
    }
  }

  // Al final solo retornamos LOS NOMBRES
  return famousStats.catNames;
}
