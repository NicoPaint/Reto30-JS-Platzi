/* 
En este desafío tendrás que procesar una lista de compras.

Deberás implementar la lógica de la función processShoppingList de tal manera que esta módifique el array original de la siguiente manera

Si el nombre del producto incluye la palabra "oferta", se debe aplicar un descuento del 20% al precio del producto.
Multiplicar el precio del producto por su cantidad
Eliminar el atributo quantity una vez hecho lo anterior.
Finalmente, debes retornar el total de la suma de todos los productos de la lista modificada.

Ejemplo 1

Input:
const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

processShoppingList(shoppingList)

Output: 89

Ejemplo 2

Input:
const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

processShoppingList(shoppingList)

console.log(shoppingList)

// El array original debe ser modificado

Output:
[
  { name: "pan", price: 40 },
  { name: "leche", price: 25 },
  { name: "oferta manzanas", price: 24 },
]
*/

//Mi solución
export function processShoppingList(list) {
    // Tu código aquí 👈
    list.forEach(item => {
        if(item.name.includes("oferta")) item.price *= 0.8;

        item.price *= item.quantity;
        delete item.quantity;
    })

    const total = list.map(item => item.price).reduce((acumulador, numero) => acumulador + numero);
    return total;
}