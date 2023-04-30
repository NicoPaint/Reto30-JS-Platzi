/*
En este desafío, tu objetivo es implementar una singly linked list para almacenar información sobre pacientes de un hospital. Cada nodo de la lista representará a un paciente y tendrá los siguientes campos:

Nombre del paciente (string)
Edad del paciente (number)
Número de cama asignada al paciente (number)
La lista deberá tener los siguientes métodos:

addPatient(name, age): agrega un nuevo paciente a la lista, asignándole la próxima cama disponible. Si no hay camas disponibles, debe lanzar un error con el mensaje "No hay camas disponibles".

removePatient(name): remueve al paciente con el nombre especificado de la lista y libera su cama. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

getPatient(name): retorna la información del paciente con el nombre especificado en el siguiente formato { name, age, bedNumber }. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

getPatientList(): retorna una lista con la información de todos los pacientes en la lista, cada paciente deberá tener el siguiente formato { name, age, bedNumber }.

getAvailableBeds(): retorna un número con el total de camas disponibles.

Recuerda usar la sintaxis throw new Error() para los errores

Aquí tienes una guía paso a paso de cómo implementar la singly linked list:

Ejemplo 1:

Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.getPatientList()
Output:

[
  { name: "Paciente 1", age: 20, bedNumber: 1 },
  { name: "Paciente 2", age: 30, bedNumber: 2 },
]

Ejemplo 2:


Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.getPatient("Paciente 1")

Output:
{
  name: "Paciente 1",
  age: 20,
  bedNumber: 1,
}

Ejemplo 3:

Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.removePatient("Paciente 1")

list.getPatientList()

Output:

[
  { name: "Paciente 2", age: 30, bedNumber: 2 },
]
*/

//Mi solución
//Archivo Node.js
export class Node {
    constructor(name, age, bedNumber) {
      // Tu código aquí 👈🏻
      this.name = name;
      this.age = age;
      this.bedNumber = bedNumber;
      this.next = null;
    }
  }

//Archivo exercise.js
import { Node } from "./Node";

export class PatientList {
  constructor(beds) {
    // Tu código aquí 👈🏻
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.beds = new Array();
    for(let i = 1; i <= beds; i++){
        this.beds.push(i);
    }
  }

  addPatient(name, age) {
    // Tu código aquí 👈🏻
    if(this.beds.length === 0) throw new Error("No hay camas disponibles");

    const newPatient = new Node(name, age, this.beds[0]);
    this.beds.shift();

    if(!this.head){
        this.head = newPatient;
        this.tail = newPatient;
    }
    else{
        this.tail.next = newPatient;
        this.tail = newPatient;
    }
    this.length++;
  }

  removePatient(name) {
    // Tu código aquí 👈🏻
    if(!this.head) throw new Error("Paciente no encontrado");

    if(this.head.name === name){
        this.beds.push(this.head.bedNumber);
        this.head = this.head.next;
        this.length--;
        return;
    }

    let currentNode = this.head;

    while(currentNode.next){
        if(currentNode.next.name === name){
            this.beds.push(currentNode.next.bedNumber);
            currentNode.next = currentNode.next.next;
            this.length--;
            return;
        }
        currentNode = currentNode.next;
    }

    throw new Error("Paciente no encontrado");
  }

  getPatient(name) {
    // Tu código aquí 👈🏻
    if(!this.head) throw new Error("Paciente no encontrado");

    let currentNode = this.head;

    while(currentNode){
        if(currentNode.name === name){
            return{
                name: currentNode.name,
                age: currentNode.age,
                bedNumber: currentNode.bedNumber
            }
        }
        currentNode = currentNode.next;
    }

    throw new Error("Paciente no encontrado");
  }

  getPatientList() {
    // Tu código aquí 👈🏻
    const list = new Array();

    let currentNode = this.head;

    while(currentNode){
        list.push({
            name: currentNode.name,
            age: currentNode.age,
            bedNumber: currentNode.bedNumber
        })
        currentNode = currentNode.next;
    }

    return list;
  }

  getAvailableBeds() {
    // Tu código aquí 👈🏻
    return this.beds.length;
  }
}