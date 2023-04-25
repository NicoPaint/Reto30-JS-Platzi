/*
En este ejercicio práctico, crearás métodos adicionales para una singly linked list.

Para este ejercicio, deberás implementar la lógica de algunos métodos de LinkedListRecharged que heredará de un LinkedList (SinglyLinkedList.js) previamente creada.

Los métodos que deberás implementar son los siguientes

get(index): este método recibirá un index y retornará el valor del nodo en la posición buscada, en caso de recibir un index invalido este retornará null.

insertAt(index, value): este método inserta un valor en la posición especificada.

toArray(): Tomará todos los valores de la singly linked list y los retornará en un array.

removeAt(index): este método elimina el nodo en el index especificado y retorna el valor.

Las pruebas harán uso del método toArray() para comparar resultados.

Ejemplo 1:


Input:
const linkedList = new LinkedListRecharged();

El método append ya se encuentra implementado por lo que no debes preocuparte
linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");

linkedList.get(1)

Output:
"Días"

Ejemplo 2:

Input:
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insertAt(1, 5)

linkedList.toArray()

Output:
[1, 5, 2, 3]

Ejemplo 3:


Input:
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.removeAt(1);

linkedList.toArray()

Output:
[1, 3]
*/

//Mi solución
//Archivo Node.js
export class Node {
  // Este código no debe ser modificado ❌
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


//Archivo SinglyLinkedList.js
import { Node } from "./Node";

// Este código no debe ser modificado ❌
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}


//Archivo exercise.js
import { LinkedList } from "./SinglyLinkedList";
import { Node } from "./Node";

export class LinkedListRecharged extends LinkedList {
  get(index){
   // Tu código aquí 👈
    if (index >= this.length || index < 0) return null;

    let contador = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (index === contador) return currentNode.value;
      currentNode = currentNode.next;
      contador++;
    }
  }

  insertAt(index, value){
    // Tu código aquí 👈
    if (index > this.length || index < 0) return null;

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }

    let contador = 1;
    let currentNode = this.head;

    while (currentNode) {
      if (index === contador) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        if (index === this.length) this.tail = currentNode.next;
        this.length++;
      }

      currentNode = currentNode.next;
      contador++;
    }
  }

  toArray(){
    // Tu código aquí 👈
    const values = new Array();
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }

  removeAt(index){
    // Tu código aquí 👈
    if (index >= this.length || index < 0) return null;

    if (index === 0) {
      const erasedValue = this.head.value;
      this.head = this.head.next;
      this.length--;
      return erasedValue;
    }

    let contador = 1;
    let currentNode = this.head;

    while (currentNode) {
      if (index === contador) {
        const erasedValue = currentNode.next.value;
        currentNode.next = currentNode.next.next;
        if (index === this.length - 1) this.tail = currentNode;
        this.length--;
        return erasedValue;
      }
      currentNode = currentNode.next;
      contador++;
    }
  }
}
