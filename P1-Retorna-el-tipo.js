/*
En este desafío encontrarás una función llamada solution que recibe un parámetro llamado valor. Debes encontrar el tipo de dato del parámetro valor y retornarlo desde la función solution.

Recuerda que el parámetro valor será distinto por cada distinta forma en que ejecutemos la función solution.

Por ejemplo:

Dados los siguientes llamados a la función solution:

solution(1)
solution("Dieguillo")
solution(true)

Debes obtener los siguientes resultados:

"number"
"string"
"boolean"
*/

//Mi solucion

export function solution(valor) {
  // Escribe tu código aquí 👈
  return typeof valor;
}
