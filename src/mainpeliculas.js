import data from './data/ghibli/ghibli.js';
import { filtrodefechas } from './data.js';
//import datalover from './data.js';
// import movie from "./data.js"

const contenido = document.querySelector("#lista")
const fragment = document.createDocumentFragment()

export const todoslosdatos= data.films;

let filtros = filtrodefechas (todoslosdatos,"2008");
console.log(filtros)

 todoslosdatos.forEach(film => {
    const titulo = document.createElement("p")
    titulo.textContent = film.title;
    const imagen = document.createElement("img")
    imagen.src = film.poster;
    const yearlanzamiento = document.createElement("p")
    yearlanzamiento.textContent = film.release_date

    const pelicula = document.createElement("div")
    pelicula.appendChild(imagen)
    pelicula.appendChild(titulo)
    pelicula.appendChild(yearlanzamiento)
    const marco = document.createElement("div")
    marco.appendChild(pelicula)
    marco.classList.add("marco")
    fragment.appendChild(marco)

     console.log(filtrodefechas)
    
})

contenido.appendChild(fragment)
