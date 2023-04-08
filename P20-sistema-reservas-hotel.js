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
    let reservaciones = [];

    function comprobarFechas(saved, checkInSearching, checkOutSearching) {
      const inSaved = new Date(saved.checkIn.split("/").reverse().join("/"));
      const outSaved = new Date(saved.checkOut.split("/").reverse().join("/"));

      const inSearching = new Date(checkInSearching.split("/").reverse().join("/"));
      const outSearching = new Date(checkOutSearching.split("/").reverse().join("/"));

      if(inSearching >= inSaved && inSearching < outSaved) return saved;
      else if(outSearching <= outSaved && outSearching > inSaved) return saved;
      else if(inSearching < inSaved && outSearching > outSaved) return saved;
    };

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
            const isOccupied = reservaciones.find(reserva => {
              if(reservation.roomNumber === reserva.roomNumber) return comprobarFechas(reserva, reservation.checkIn, reservation.checkOut);
            })

            if(isOccupied) throw new Error("La habitación no está disponible");

            reservaciones.push(reservation);
            return `La reservación de ${reservation.name} fue agendada exitosamente`;
        },
        removeReservation: id => {
          const removed = reservaciones.find(reserva => reserva.id === id);

          if(!removed) throw new Error("La reservación que se busca remover no existe");
          
          reservaciones = reservaciones.filter(reserva => reserva != removed);
          return removed;
          
        },
        getReservations: () => reservaciones,
        getAvailableRooms: (checkIn, checkOut) => {
          const freeRooms = [];

          const occupiedRooms = reservaciones.filter(reserva => comprobarFechas(reserva, checkIn, checkOut)).map(reserva => reserva.roomNumber).filter((roomNumber, index, array) => array.indexOf(roomNumber) === index);
          
          for(let i = 1; i <= rooms; i++){
            let occupied = false;
            for(let j = 0; j < occupiedRooms.length; j++){
              if(occupiedRooms[j] === i) occupied = true;
            }

            if(!occupied) freeRooms.push(i);
          }
          
          return freeRooms;
        }
    }
}

const myHotel = hotelSystem(10);
myHotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "30/08",
  checkOut: "07/09",
  roomNumber: 1,
});
myHotel.addReservation({
  id: 2,
  name: "Nick Johns",
  checkIn: "15/09",
  checkOut: "20/09",
  roomNumber: 3,
});
myHotel.addReservation({
  id: 3,
  name: "Ana Huggies",
  checkIn: "09/09",
  checkOut: "12/09",
  roomNumber: 7,
});
myHotel.getAvailableRooms("01/09", "18/09");

//La solución de Platzi

export function hotelSystem(rooms) {
  const reservations = [];

  function searchReservation(id) {
    const index = reservations.findIndex((room) => room.id === id);

    if (index > -1) {
      return reservations[index];
    }

    throw new Error("La reservación no existe");
  }

  function getSortReservations() {
    const copy = [...reservations];

    copy.sort((a, b) => {
      const aDate = new Date(`${a.checkIn} ${new Date().getFullYear()}`);
      const bDate = new Date(`${b.checkIn} ${new Date().getFullYear()}`);
      return aDate - bDate;
    });

    return copy;
  }

  function addReservation(reservation) {
    if (!isAvailable(reservation)) {
      throw new Error("La habitación se encuentra ocupada");
    }

    reservations.push(reservation);
    return `La reservación de ${reservation.name} fue agendada exitosamente`;
  }

  function removeReservation(id) {
    const index = reservations.findIndex((room) => room.id === id);

    if (index > -1) {
      const removedReservation = reservations[index];
      reservations.splice(index, 1);
      return removedReservation;
    }

    throw new Error("La habitación que se busca remover no existe");
  }

  function getReservations() {
    return reservations;
  }

  function isAvailable(reservation) {
    const checkIn = reservation.checkIn;
    const checkOut = reservation.checkOut;

    for (const currentReservation of reservations) {
      const currentCheckIn = currentReservation.checkIn;
      const currentCheckOut = currentReservation.checkOut;

      if (
        (checkIn >= currentCheckIn && checkIn < currentCheckOut) ||
        (checkOut > currentCheckIn && checkOut <= currentCheckOut) ||
        (checkIn <= currentCheckIn && checkOut >= currentCheckOut)
      ) {
        if (currentReservation.roomNumber === reservation.roomNumber) {
          return false;
        }
      }
    }

    return true;
  }

  function getAvailableRooms(checkIn, checkOut) {
    const availableRooms = [];

    for (let i = 1; i <= rooms; i++) {
      const reservation = { checkIn, checkOut, roomNumber: i };

      if (isAvailable(reservation)) {
        availableRooms.push(i);
      }
    }
    return availableRooms;
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}

