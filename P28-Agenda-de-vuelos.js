/*
En este desafío crearas un Sistema de reservaciones de vuelos.

Tendrás que implementar la lógica de las siguientes clases con las siguientes características (cada clase tiene su propio archivo dentro del coding playground)

Flight: permite crear vuelos regulares con los atributos origin (origen), destination (destino), date (fecha de salida), capacity (capacidad máxima), price (precio) e inicilizará una variable llamada passengers la cual será el array donde almacenaremos a los pasajeros. Además, incluirá el método sellTicket(passenger) para vender un boleto a un pasajero específico siempre y cuando la capacidad sea mayor a cero. Este método agregará al pasajero a la lista de pasajeros del avión y a su vez agregará el vuelo a la lista de vuelos del pasajero. La función devolverá un objeto reservation.

Passenger: cada pasajero tendrá los atributos name (nombre), lastName (apellido) y age (edad) y se inicializará con una lista de vuelos (flights) vacía. Cada que se agregue un vuelo a dicha lista, solo deberán agregarse las siguientes propiedades: origin, destination, date y price.

Reservation aceptará un objeto flight y un objeto passenger, e incluirá el método reservationDetails() que devolverá un objeto con los detalles de la reservación, incluyendo origin, destination, date y reservedBy (nombre completo del pasajero).

PremiumFlight extenderá de la clase Flight y agregará la propiedad specialService que será un costo adicional al precio del vuelo dentro del método sellTicket(passenger).

EconomicFlightde igual manera, extenderá de la clase Flight y aplicará un descuento del 20% dentro del método sellTicket(passenger) para los pasajeros con una edad menor a 18 años o mayor a 65 años.

Ejemplo 1


Input:
const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);

const passenger = new Passenger("Juan", "Perez", 30);

const reservation = flight.sellTicket(passenger);

console.log(passenger.flights)

Output:
[
  {
    origin: "CDMX",
    destination: "Guadalajara",
    date: "2022-01-01",
    price: 1000,
  },
]

Ejemplo 2:

Input:
const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
const passenger = new Passenger("Juan", "Perez", 30);

const reservation = flight.sellTicket(passenger);

console.log(flight.passengers)

Output:

[
  {
    fullName: "Juan Perez",
    age: 30,
  },
]

Ejemplo 3:

Input:
const flight = new EconomicFlight(
  "New York",
  "Paris",
  "2023-12-25",
  100,
  200
);

const passenger = new Passenger("Pedro", "Gutierrez", 17);

const reservation = flight.sellTicket(passenger);

console.log(reservation.flight.price)

Output: 160
*/

//Mi solución
//Archivo Flight.js
import { Reservation } from "./Reservation";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    if (this.capacity > 0) {
      this.capacity--;
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age
      });
      
      const { origin, destination, date, price } = this;
      passenger.flights.push({ origin, destination, date, price });
      
      return new Reservation(this, passenger);
    }
  }
}

//Archivo PremiumFlight.js
import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    // Tu código aquí 👈
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    if (this.capacity > 0) {
      this.capacity--;
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age
      });
      
      const { origin, destination, date, price, specialService } = this;
      const totalPrice = price + specialService;
      passenger.flights.push({ origin, destination, date, totalPrice });
      
      return new Reservation(this, passenger);
    }
  }
}

//Archivo EconomicFlight.js
import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class EconomicFlight extends Flight {
  sellTicket(passenger) {
    // Tu código aquí 👇
    if (this.capacity > 0) {
      if (passenger.age < 18 || passenger.age > 65) {
        this.capacity--;
        this.passengers.push({
          fullName: `${passenger.name} ${passenger.lastName}`,
          age: passenger.age
        });
        
        const { origin, destination, date, price } = this;
        const finalPrice = price * 0.8;
        passenger.flights.push({ origin, destination, date, finalPrice });
        
        return new Reservation(this, passenger);
      }

      this.capacity--;
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age
      });
      
      const { origin, destination, date, price } = this;
      passenger.flights.push({ origin, destination, date, price });
      
      return new Reservation(this, passenger);
    }
  }
}

//Archivo Passenger.js
export class Passenger {
  // Tu código aquí 👈
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = [];
  }
}

//Archivo Reservation.js
export class Reservation {
  constructor(flight, passenger) {
    // Tu código aquí 👈
    this.flight = flight;
    this.passenger = passenger;
  }

  reservationDetails() {
    // Tu código aquí 👈
    const { origin, destination, date } = this.flight;
    const fullName = `${this.passenger.name} ${this.passenger.lastName}`;
    return {
      origin,
      destination,
      date,
      reservedBy: fullName
    }
} 
