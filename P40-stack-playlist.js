/*
En este ejercicio, el objetivo es implementar una playlist de un servicio de música utilizando un stack.

Deberás implementar la lógica de la clase Playlist la cual deberá tener las siguientes 3 propiedades top, bottom y length para poder desarrollar el stack.

addSong(song): este método debe permitir agregar una canción al stack.

playSong(): este método debe permitir reproducir la canción que está en el tope del stack y luego eliminarla. Si el stack está vacío, deberá lanzar un error con el mensaje "No hay canciones en la lista".

getPlaylist() transforma el stack a un array con todas las canciones que están en el, en orden de reproducción (de la última agregada a la primera).

Ejemplo 1:

Input:
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.playSong();
Output: "Hotel California"
playlist.playSong();
Output: "Stairway to Heaven"
playlist.playSong();
Output: "Bohemian Rhapsody"
playlist.playSong();
Output: Error: No hay canciones en la lista

Ejemplo 2:


Input:
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.getPlaylist();

Output: ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"]
*/

//Mi solución
//Archivo Node.js
export class Node {
    constructor(value) {
      // Tu código aquí 👈🏻
      this.value = value;
      this.next = null;
    }
}

//Archivo exercise.js
import { Node } from "./node";

export class Playlist {
  constructor() {
    // Tu código aquí 👈🏻
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  addSong(song) {
    // Tu código aquí 👈🏻
    const newSong = new Node(song);

    if(!this.top){
        this.top = newSong;
        this.bottom = newSong
    }
    else{
        newSong.next = this.top;
        this.top = newSong;
    }
    this.length++;
  }

  playSong() {
    // Tu código aquí 👈🏻
    if(!this.top) throw new Error('No hay canciones en la lista');

    if(this.top === this.bottom) this.bottom = null;

    const playedSong = this.top;
    this.top = this.top.next;
    this.length--;

    return playedSong.value;
  }

  getPlaylist() {
    // Tu código aquí 👈🏻
    const playList = new Array();

    let currentSong = this.top;
    while(currentSong){
        playList.push(currentSong.value);
        currentSong = currentSong.next;
    }

    return playList;
  }
}
