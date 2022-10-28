import data from './data/ghibli/ghibli.js';
import { filtrodedirector } from './data.js';

const contenido = document.querySelector("#lista")
const fragment = document.createDocumentFragment()

const todosLosDatos = data.films;
const peliculasDatos = [...todosLosDatos]



const filtro = document.getElementById("filtro")
filtro.addEventListener("change", (event) => {
   const fdirectores = filtrodedirector(todosLosDatos, event.target.value);

   contenido.innerHTML = ""
   cartaPeliculas(fdirectores)
})

const ordenarPel = document.querySelector("#ordenarPel")
ordenarPel.addEventListener("change", (event) => {
    const oPel=  (peliculasDatos, event.target.value);
    contenido.innerHTML=""
    cartaPeliculas(oPel)

})

function cartaPeliculas(todoslosdatos) {
   todoslosdatos.forEach(film => {
      const titulo = document.createElement("p")
      titulo.textContent = film.title;
      const imagen = document.createElement("img")
      imagen.src = film.poster;
      const yearlanzamiento = document.createElement("p")
      yearlanzamiento.textContent = film.release_date
      const directorpeli = document.createElement("p")
      directorpeli.textContent = film.director;

      const pelicula = document.createElement("div")
      pelicula.appendChild(imagen)
      pelicula.appendChild(titulo)
      pelicula.appendChild(yearlanzamiento)
      pelicula.appendChild(directorpeli)
      const marco = document.createElement("div")
      marco.appendChild(pelicula)
      marco.classList.add("marco")
      fragment.appendChild(marco)
   })
   contenido.appendChild(fragment)
}


todosLosDatos.forEach(film => {
   const titulo = document.createElement("p")
   titulo.textContent = film.title;
   const imagen = document.createElement("img")
   imagen.src = film.poster;
   const yearlanzamiento = document.createElement("p")
   yearlanzamiento.textContent = film.release_date
   const directorpeli = document.createElement("p")
   directorpeli.textContent = film.director;

   const pelicula = document.createElement("div")
   pelicula.appendChild(imagen)
   pelicula.appendChild(titulo)
   pelicula.appendChild(yearlanzamiento)
   pelicula.appendChild(directorpeli)
   const marco = document.createElement("div")
   marco.appendChild(pelicula)
   marco.classList.add("marco")
   fragment.appendChild(marco)
})
contenido.appendChild(fragment)


