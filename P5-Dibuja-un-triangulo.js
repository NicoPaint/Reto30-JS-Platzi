/* 
En este desafío, debes dibujar un triángulo isósceles usando bucles.

Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola.

Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

Input: printTriangle(5, "*")
Output:
    *
   **
  ***
 ****
*****

Ejemplo 2:

Input: printTriangle(6, "$")
Output:
     $
    $$
   $$$
  $$$$
 $$$$$
$$$$$$
*/

//Mi solucion

export function printTriangle(size, character) {
    // Tu código aquí 👈
    let vacio = "";
    let simbolos = "";
    let contador = "";
    for (let i = 0; i < size; i++){
      vacio += " ";
      simbolos += character;
    }
    
    for(let i = size - 1; i > 0; i--){
        contador += vacio.substring(0, i) + simbolos.substring(i) + "\n";
    }

    contador += simbolos;
    console.log(contador);
    return contador;
}

printTriangle(10,"&");

//La solucion de Platzi

export function printTriangle(size, character) {
    const triangle = [];
    for (let i = 1; i <= size; i++) {
      let spaces = " ".repeat(size - i);
      let characters = character.repeat(i);
      let figure = `${spaces}${characters}`;
      triangle.push(figure);
    }
  
    return triangle.join("\n");
  }