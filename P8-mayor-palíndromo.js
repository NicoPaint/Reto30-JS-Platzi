/*
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.

Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

Ejemplo 1:

Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Ejemplo 2:

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null
*/

//Mi solucion
export function findLargestPalindrome(words) {
  // Tu código aquí 👈
  const masLargo = {
    palindrome: null,
    largo: 0,
  }

  words.forEach(word => {
    let backward = "";

    for (let i = word.length - 1; i >= 0; i--){
      backward += word[i];
    }

    if (word === backward  && word.length > masLargo.largo) {
      masLargo.largo = word.length;
      masLargo.palindrome = word;
    }
  })

  return masLargo.palindrome;
}

//Solucion de Platzi
export function findLargestPalindrome(words) {
  // Primero definimos que la palabra más larga es null
  // Debido a que no se tiene un valor 
  let largest = null;
  // Después iteramos por cada una de las palabras
  for (const word of words) {
    // con split("") creamos un array donde cada elemento es una letra
    // Ejemplo "hola" => ["h","o","l","a"]
    // con reverse() "volteamos" el array
    // Ejemplo ["h","o","l","a"] => ["a"","l","o","h"]
    // y con .join("") volvemos a convertirlo en un string
    // Ejemplo  ["a"","l","o","h"] => "aloh"
    const reversedWord = word.split("").reverse().join("");
    // La primer validación que hacemos es para ver si efectivamente es un array
    if (reversedWord === word) {
      // Si si lo es, primero verificamos que se reemplace la variable largest
      // por el primer palindromo si es que no existe uno aún
      if (largest == null || word.length > largest.length) {
         // En caso de existir, se compara su longitud con el palindromo existente
        largest = word;
      }
    }
  }

  // Al final siempre retornamos la variable largest
  // Ya que si no existe ni uno solo en el array, su valor se mantiene como null
  return largest;
}
