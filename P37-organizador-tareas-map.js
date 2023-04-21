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
function taskManager() {
  // Tu código aquí 👈
  const myMap = new Map();

  return {
    addTask: (task, tags) => {
      const lowTask = task.toLowerCase();

      if (!myMap.has(lowTask)) {
        const setTags = new Set();
        tags.forEach(tag => setTags.add(tag));
        myMap.set(lowTask, setTags);
      }
      else {
        const thisSet = myMap.get(lowTask);
        tags.forEach(tag => thisSet.add(tag));
      }
    },
    printTasks: () => myMap,
  }
}

//Solución de Platzi
export function taskManager() {
  const tasks = new Map();

  return {
    addTask(task, tags) {
      task = task.toLowerCase();
      if (tasks.has(task)) {
        const existingTags = tasks.get(task);
        tags.forEach((tag) => existingTags.add(tag));
      } else {
        const newTags = new Set(tags);
        tasks.set(task, newTags);
      }
    },

    printTasks() {
      return tasks;
    },
  };
}