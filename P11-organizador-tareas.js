/*
En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
getTasks(): Devuelve el array de tareas.
getPendingTasks(): Devuelve solo las tareas pendientes.
getCompletedTasks(): Devuelve solo las tareas completadas.
markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
Ejemplo 1:

Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan")

Output:
planner.getCompletedTasks()
[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]

Ejemplo 2:

Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

Output:
planner.filterTasksByTag("shopping")
[{
    id: 1,
    name: "Comprar leche",
    completed: false,
    priority: 3,
    tags: ["shopping", "home"]
}]
*/

//Mi solucion

function createTaskPlanner(){
  let tareas = [];

  return {
    printTasks: () => { console.log(tareas)},
    addTask: task => {
      task.completed = false;
      tareas.push(task)
    },
    removeTask: nombreTask => {
      if(typeof nombreTask === "number"){
        tareas = tareas.filter(tarea => tarea.id !== nombreTask);
      }
      else if(typeof nombreTask === "string"){
        tareas = tareas.filter(tarea => tarea.name !== nombreTask)
      }
    },
    getTasks: () => tareas,
    getPendingTasks: () => tareas.filter(tarea => tarea.completed === false),
    getCompletedTasks: () => tareas.filter(tarea => tarea.completed === true),
    markTaskAsCompleted: nombreTask => {
      tareas = tareas.map(tarea => { 
        if(tarea.name === nombreTask || tarea.id === nombreTask) tarea.completed = true;
        return tarea;
      })
    },
    getSortedTasksByPriority: () => {
      const copiaTareas = tareas.map(tarea => tarea);
      
      return copiaTareas.sort((a, b) => a.priority - b.priority);
    },
    filterTasksByTag: (tag) => tareas.filter(tarea => {
      for(let i = 0; i < tarea.tags.length; i++){
        if(tarea.tags[i] === tag) return tarea;
      }
    }),
    updateTask: (idTask, updates) => {
      tareas = tareas.map(tarea => { 
        if(tarea.id === idTask) {
          Object.assign(tarea, updates);
        }

        return tarea;
      })
    }
  }
}

const planner = createTaskPlanner();
planner.addTask({
  id: 1,
  name: "Comprar leche",
  priority: 1,
  tags: ["shopping", "home"]
});
planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal", "negocios"]
});
planner.addTask({
  id: 3,
  name: "Terminar el código",
  priority: 1,
  tags: ["trabajo", "javascript"]
});
planner.addTask({
  id: 4,
  name: "Tomar cerveza",
  priority: 2,
  tags: ["personal", "diversion", "home"]
});
planner.updateTask(2, {
  name: "Agendar cita con Juan",
  priority: 1,
});
planner.printTasks();

//Solucion de Platzi
export function createTaskPlanner() {
  let tasks = [];

  return {
    addTask(task) {
      task.completed = false;
      tasks.push(task);
    },

    removeTask(value) {
      if (typeof value === "number") {
        tasks = tasks.filter((task) => task.id !== value);
      } else {
        tasks = tasks.filter((task) => task.name !== value);
      }
    },

    getTasks() {
      return tasks;
    },

    getPendingTasks() {
      return tasks.filter((task) => !task.completed);
    },

    getCompletedTasks() {
      return tasks.filter((task) => task.completed);
    },

    markTaskAsCompleted(value) {
      let index;

      if (typeof value === "number") {
        index = tasks.findIndex((task) => task.id === value);
      } else {
        index = tasks.findIndex((task) => task.name === value);
      }

      tasks[index].completed = true;
    },

    getSortedTasksByPriority() {
      const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
      return sortedTasks;
    },

    filterTasksByTag(tag) {
      return tasks.filter((task) => task.tags.includes(tag));
    },

    updateTask(taskId, updates) {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index] = { ...tasks[index], ...updates };
    },
  };
}