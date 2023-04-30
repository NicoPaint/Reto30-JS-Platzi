/*
En este desafío, tendrás que implementar la lógica para procesar correos electrónicos en una empresa utilizando una queue, priorizando siempre los emails más antiguos.

Tendrás crear una clase Queue para representar nuestra cola de correos electrónicos. La clase debe tener los siguientes métodos:

enqueue(from, to, body, subject): Agrega un correo electrónico al final de la queue.
dequeue(): Elimina y devuelve un objeto con siguientes propiedades: { from, to, body, subject } del email más antiguo de la cola.
peek(): Devuelve el correo electrónico más antiguo de la cola sin eliminarlo.
size(): Devuelve la cantidad de correos electrónicos en la cola.
Tendrás una clase Mail ya construida para usarla dentro del desarrollo de tu solución que simulará ser un nodo dentro de la queue.

Ejemplo 1

Input:
const emailQueue = new Queue();

emailQueue.enqueue(
  'jane@ejemplo.com',
  'support@ejemplo.com',
  'No puedo iniciar sesión en mi cuenta',
  'Problema de inicio de sesión'
);

emailQueue.enqueue(
  'joe@ejemplo.com',
  'support@ejemplo.com',
  'Mi pedido no ha llegado todavía',
  'Estado del pedido'
);

emailQueue.dequeue();

Output:

{
  from: 'jane@ejemplo.com',
  to: 'support@ejemplo.com',
  body: 'No puedo iniciar sesión en mi cuenta',
  subject: 'Problema de inicio de sesión'
}
*/

//Mi solución
//Archivo node.js
export class Mail {
    constructor(from, to, body, subject) {
      this.from = from;
      this.to = to;
      this.body = body;
      this.subject = subject;
      this.next = null;
    }
  }

//Archivo exercise.js
import { Mail } from "./mail";

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    // Tu código aquí 👈🏻
    const newEmail = new Mail(from, to, body, subject);

    if(!this.first){
        this.first = newEmail;
        this.last = newEmail;
    }
    else{
        this.last.next = newEmail;
        this.last = newEmail;
    }
    this.length++;
  }

  dequeue() {
    // Tu código aquí 👈🏻
    if(!this.first) throw new Error("El buzon esta vacio");

    if(this.first === this.last) this.last = null;

    const {from, to, body, subject} = this.first;
    this.first = this.first.next;
    this.length--;

    return {
        from,
        to,
        body,
        subject
    }
  }

  peek() {
    // Tu código aquí 👈🏻
    if(!this.first) throw new Error("El buzon esta vacio");

    const {from, to, body, subject} = this.first;
    return {
        from,
        to,
        body,
        subject
    }
  }

  size() {
    // Tu código aquí 👈🏻
    return this.length;
  }
}
