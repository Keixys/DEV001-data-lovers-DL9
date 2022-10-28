import data from './data/ghibli/ghibli.js';
import { filtrodedirector } from './data.js';

const contenido = document.querySelector("#lista")
const fragment = document.createDocumentFragment()

const todoslosdatos= data.films;



const filtro = document.getElementById("filtro")
filtro.addEventListener("change", (event) => {
const fdirectores = filtrodedirector (todoslosdatos, event.target.value);

contenido.innerHTML=""
   fdirectores.forEach(film => {
      const titulo = document.createElement("p")
      titulo.textContent = film.title;
      const imagen = document.createElement("img")
      imagen.src = film.poster;
      const yearlanzamiento = document.createElement("p")
      yearlanzamiento.textContent = film.release_date;
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
  
     //   console.log(filtrodefechas)
      
  })
  
  contenido.appendChild(fragment)

})



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


