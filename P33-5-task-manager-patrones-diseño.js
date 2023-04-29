/*
En este ejercicio, tu objetivo es implementar un sistema de manejo de tareas utilizando patrones de diseño.

Deberás implementar los siguientes patrones de diseño para mejorar la funcionalidad del sistema:

Observer: Notificar a los usuarios cuando una tarea sea completada.
Proxy: Limitar el acceso a ciertas tareas para usuarios no autorizados.
Decorator: Agregar una funcionalidad adicional a una tarea ya existente, como una fecha límite y una etiqueta de prioridad.
Builder: Una alternativa para crear tareas complejas con múltiples propiedades.
Singleton: Asegurarse de que solo haya una instancia del sistema de manejo de tareas en todo el programa.
Deberás implementar la lógica de las siguientes claseslas siguientes propiedades y métodos:

Task (exercise.js)

id: un identificador único para cada tarea.
description: una descripción de la tarea.
completed: un booleano que indica si la tarea está completada o no.
users: un array de usuarios asignados a la tarea.
assignUser(): un método para asignar usuarios a una tarea
completeTask(): un método que cambia el valor de la propiedad completed a true y llama a notifyUsers().
notifyUsers(): un método para notificar a todos los usuarios asignados que la tarea fue completada.
User (User.js)

name: El nombre del usuario
notify(task): un método que recibirá una tarea y le notificará al usuario que la tarea fue completada
Authorization (Authorization.js)

checkAuthorization(): un método el cual verificará si un ususario está autorizado para completar una tarea.
TaskDecorator (TaskDecorator.js)

task: recibirá una tarea ya hecha con la clase de Task
deadline: fecha limite para completar la tarea en el siguiente formato (AAAA-MM-DD)
priority: prioridad para completar la tarea (high, medium o low)
Priority y deadline vendrán dentro de un objeto options

TaskBuilder(TaskBuilder.js)

task: Instanciará la clase task creada al inicio
Deberá tener un método por cada uno de los siguientes datos: id, description, completed, users (debe ser capaz de recibir 1 o varios users), deadline, priority.
TaskManager (TaskManager.js)

tasks: un array vacío para almacenar las tareas
getInstance(): un método que devuelva una instancia de TaskManager. Si ya hay una instancia existente, devuelve esa instancia en lugar de crear una nueva.
addTask(task): un método para agregar tareas al array que debe verificar si esta hereda de la clase Task
getTasks(): un método que regresará todas las tareas
getTaskById(id): un método que buscará una tarea por su id y la retornará, en caso de no existir regresará null
Ejemplo 1:


Input:
const taskManager1 = TaskManager.getInstance();
const taskManager2 = TaskManager.getInstance();

taskManager1 === taskManager2

Output: true

Ejemplo 2


Input:
const taskManager = TaskManager.getInstance();
const mockTask = new Task(1, "Mock task")

taskManager.addTask(new mockTask);
taskManager.getTasks();

Output:
[
  { id: 1, description: 'Mock task', completed: false, users: [] }
]

Ejemplo 3:


Input:
const authorization = new Authorization()
const user1 = new User("Juan")
const user2 = new User("Maria")
const task = new Task('4', 'Comprar pan')
task.assignUser(user1)

authorization.checkAuthorization(user2, task)

Output:
Error("No autorizado")

Ejemplo 4:


Input:
const task = new Task('5', 'Pasear al perro')
const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })

console.log(taskDecorator)

Output:

{
  task: Task {
    id: '5',
    description: 'Pasear al perro',
    completed: false,
    users: []
  },
  deadline: '2023-03-31',
  priority: 'alta'
}
*/

//Mi solucion
//Archivo exercise.js
import { User } from "./User"

export class Task{
  constructor(id, description, completed = false, users = new Array()){
     // Tu código aquí 👈
     this.id = id;
     this.description = description;
     this.completed = completed;
     this.users = users;
  }

  assignUser(user){
   // Tu código aquí 👈
   this.users.push(user);
  }

  completeTask() {
     // Tu código aquí 👈
     this.completed = true;
     this.notifyUsers();
  }

  notifyUsers() {
     // Tu código aquí 👈
     this.users.forEach(user => user.notify(this));
  }
}

//Archivo TaskManager.js
import { Task } from "./exercise";

export class TaskManager {
  constructor() {
     // Tu código aquí 👈
     this.tasks = new Array();
  }

  static getInstance() {
     // Tu código aquí 👈
  }

  addTask(task){
     // Tu código aquí 👈
  }

  getTasks(){
     // Tu código aquí 👈
  }

  getTaskById(id){
     // Tu código aquí 👈
  }
}


//Archivo TaskDecorator.js
export class TaskDecorator {
    constructor(task, options) {
       // Tu código aquí 👈
       this.task = task;
       const { deadline, priority } = options;
       this.deadline = deadline;
       this.priority = priority;
    }
  
    assignUser(user) {
       // Tu código aquí 👈
       this.task.users.push(user);
    }
  
    completeTask() {
       // Tu código aquí 👈
       this.task.completed = true;
       this.notifyUsers();
    }
  
    notifyUsers() {
       // Tu código aquí 👈
       this.task.users.forEach(user => user.notify(this));
    }
  }

//Archivo TaskBuilder.js
import { Task } from "./exercise";

export class TaskBuilder {
  constructor() {
     // Tu código aquí 👈
     this.id = 0;
     this.description = '';
     this.completed = false;
     this.users = new Array();
     this.deadline = '';
     this.priority = '';
  }

  setId(id) {
     // Tu código aquí 👈
     this.id = id;
     return this;
  }

  setDescription(description) {
     // Tu código aquí 👈
     this.description = description;
     return this;
  }

  setCompleted(completed) {
     // Tu código aquí 👈
     this.completed = completed;
     return this;
  }

  setUsers(users) {
     // Tu código aquí 👈
     users.forEach(user => this.users.push(user));
     return this;
  }

  setDeadline(deadline) {
     // Tu código aquí 👈
     this.deadline = deadline;
     return this;
  }

  setPriority(priority) {
     // Tu código aquí 👈
     this.priority = priority;
     return this;
  }

  build() {
     // Tu código aquí 👈
     const newTask = new Task(this.id, this.description, this.completed, this.users);
     const options = {
        deadline: this.deadline,
        priority: this.priority
     }

     return newTask, options;
  }
}

//Archivo User.js
export class User {
    constructor(name) {
       // Tu código aquí 👈
       this.name = name;
    }
  
    notify(task) {
       // Tu código aquí 👈
       return `${this.name}, la tarea ${task.description} ha sido completada`;
    }
  }

//Archivo Authorization.js
export class Authorization {
    checkAuthorization(user, task) {
      // Tu código aquí 👈
    }
  }
