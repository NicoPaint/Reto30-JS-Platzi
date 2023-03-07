/*
En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

name: El nombre del estudiante
grades: Las notas de cada materia del estudiante
A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método toFixed() el cual se usa de la siguiente manera 👇

const number = 100.32433;
number.toFixed(2); // "100.32"

👀 Ten en cuenta que este método regresa el número como un string y se espera que sea de tipo numérico.

Ejemplo:

Input: getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])

Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}
*/

//Mi solucion

export function getStudentAverage(students) {
  // Tu código aquí 👈
  const classInfo = {
    classAverage: 0,
    students: [],
  };

  let contador = 0;
  for (let i = 0; i < students.length; i++) {
    const student = {};
    let average = 0;

    student.name = students[i].name;
    average = Number(((students[i].grades.reduce((acumulador, numero) => acumulador + numero)) / students[i].grades.length).toFixed(2));
    student.average = average;

    classInfo.students.push(student);
    contador += average;

    if (i == students.length - 1) {
      classInfo.classAverage = Number((contador / students.length).toFixed(2));
    }

  }

  return classInfo;
}


//Platzi solucion
export function getStudentAverage(students) {
  // Creamos un array donde obtendremos los estudiantes con su promedio
  const studentsWithAverage = students.map((student) => {
    // separamos las notas en una sola variable para hacerlo más legible
    const grades = student.grades;
    // calculamos el promedio sumando todas las notas para dividirlas
    // en el total de materias
    const average =
      grades.reduce((total, item) => total + item, 0) / grades.length;

    return {
      // Retornamos un objeto con el nombre del estudiante
      name: student.name,
      // Junto con su promedio a 2 decimales
      // Es importante parsearlo con Number porque el método toFixed devuelve un string
      average: Number(average.toFixed(2)),
    };
  });

  // Después pasamos a hacer lo mismo pero obteniendo el promedio de la clase
  const classAverage =
    studentsWithAverage.reduce((total, student) => total + student.average, 0) /
    studentsWithAverage.length;
  // Sumamos todos los promedios y los dividimos entre el total de estudiantes

  // Al final armamos un objeto que será el que retornaremos
  const rta = {
    // De igual manera pasamos el promedio de la clase a 2 decimales
    classAverage: Number(classAverage.toFixed(2)),
    students: studentsWithAverage,
  };

  // Y retornamos el objeto anterior
  return rta;
}
