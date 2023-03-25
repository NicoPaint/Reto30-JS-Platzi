/* 
En este desafío deberás crear un sistema de administración para un hotel.

El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel. La función recibirá un parámetro rooms, definirá el número total de habitaciones.

El closure debe retornar las siguientes funciones:

searchReservation(id): esta función permitirá buscar una reservación por su ID. En caso de no encontrarla, se retornará un error con el mensaje "La reservación no fue encontrada".

getSortReservations(): esta función nos devolverá una copia de las reservaciones sin modificar el array original ordenando las reservaciones por fecha de check-in de manera ascendente.

addReservation(reservation): esta función se usará para agregar una nueva reservación. Debe asegurarse de que la habitación solicitada esté disponible para las fechas de check-in y check-out. En caso de que esté reservada, se retornará un error con el mensaje "La habitación no está disponible".

removeReservation(id): esta función eliminará la reservación correspondiente al ID recibido y la retornará. En caso de que la reservación no exista, se retornará un error con el mensaje "La reservación que se busca remover no existe".

getReservations(): esta función nos devolverá todas las reservaciones.

getAvailableRooms(checkIn, checkOut): esta función recibirá dos parámetros, checkIn y checkOut con formato "dd/mm". La función debe devolver las habitaciones disponibles para las fechas dadas.

El formato que recibirás para las reservaciones será el siguiente:

id: un identificador único
name: El nombre de quien agenda
checkIn: Fecha de llegada
checkOut: Fecha de salida
roomNumber: La habitación solicitada
Ejemplo 1:

Input:

const hotel = hotelSystem(10);

// Agregar una nueva reservación
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.getReservations();

Output:
[
  {
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  }
]

Ejemplo 2:

Input:

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
});

// Buscar una resevación hecha
hotel.searchReservation(2);

Output:
{
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
}

Ejemplo 3:

Input:

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});

// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
hotel.getAvailableRooms("01/01", "05/01")

Output:

[2, 3, 4, 5, 6, 7, 8, 10]
*/

function hotelSystem(rooms) {
    // Tu código aquí
    const reservaciones = [{
        id: 1,
        name: "John Doe",
        checkIn: "01/03",
        checkOut: "02/03",
        roomNumber: 1,
      },
      {
        id: 2,
        name: "Doe",
        checkIn: "03/03",
        checkOut: "04/03",
        roomNumber: 1,
      },
      {
        id: 3,
        name: "John",
        checkIn: "04/01",
        checkOut: "05/01",
        roomNumber: 1,
      },
      {
        id: 4,
        name: "Doe John",
        checkIn: "02/02",
        checkOut: "03/02",
        roomNumber: 1,
      }];

    return {
        printReservations: () => console.log(reservaciones),
        searchReservation: id => {
            const reservaId = reservaciones.find(reserva => reserva.id === id);
            if(!reservaId) throw new Error("La reservación no fue encontrada");

            return reservaId;
        },
        getSortReservations: () => {
            const copiaOrdenada = [...reservaciones];

            return copiaOrdenada.sort((a, b) => {
                const checkInPrimero = a.checkIn.split("/");
                const checkInSegundo = b.checkIn.split("/");

                return checkInPrimero[0] - checkInSegundo[0];

            }).sort((a, b) => {
              const checkInPrimero = a.checkIn.split("/");
              const checkInSegundo = b.checkIn.split("/");

              return checkInPrimero[1] - checkInSegundo[1];
            });
        },
        addReservation: reservation => {
            
        }
    }
}

const myHotel = hotelSystem(10);
myHotel.getSortReservations();
