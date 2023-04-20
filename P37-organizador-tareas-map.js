/*
En este desafío tendrás que construir un organizador de tareas para planificar tus actividades diarias junto con sus correspondientes etiquetas.

Debes crear un closure que use Maps y Sets para devolver 2 funciones:

addTask(task, tags): esta función te ayudará a agregar tareas al Map. Es importante que conviertas todas las letras de la tarea en minúsculas usando toLowerCase para verificar si la tarea existe. En caso de que exista, solo se agregarán las nuevas etiquetas como un Set, en caso contrario, se crearán desde cero.

printTasks(): esta función te devolverá todas las tareas creadas con sus etiquetas.

Ejemplo 1:

Input:

const myTaskManager = taskManager()
addTask("Comprar leche", ["compras", "urgente"]);
addTask("Sacar al perro", ["mascotas"]);
addTask("Hacer ejercicio", ["salud"]);

printTasks();

Output:

Map(3) { "comprar leche" → Set(2), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }

Ejemplo 2:

Input

const myTaskManager = taskManager()
addTask("Comprar leche", ["compras", "urgente"]);
addTask("Sacar al perro", ["mascotas"]);
addTask("Hacer ejercicio", ["salud"]);
addTask("Comprar leche", ["lácteos"]);

Output:

Map(3) { "comprar leche" → Set(3), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }

Made 1 formatting 
*/

//Mi solución
export function taskManager() {
  // Tu código aquí 👈
  const myMap = new Map();

  return {
    addTask: (task, tags) => {
      
    }
  }
}
