import data from './data/ghibli/ghibli.js';
import { filtrodedirector , ordenAyZpel, ordenZyApel, ordenPopularity, ordenYear} from './data.js';

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
   if (event.target.value === "A to Z") {
    const oPel= ordenAyZpel(peliculasDatos, event.target.value);
    contenido.innerHTML=""
    cartaPeliculas(oPel)
   }
})

const ordenarPelRevers = document.querySelector("#ordenarPel")
ordenarPelRevers.addEventListener("change", (event) => {
   if (event.target.value === "Z to A") {
    const oPel= ordenZyApel(peliculasDatos, event.target.value);
    contenido.innerHTML=""
    cartaPeliculas(oPel)
   }
})

const ordenarPopu = document.querySelector("#ordenarPel")
ordenarPopu.addEventListener("change", (event) => {
   if (event.target.value === "Popularity") {
    const oPopu= ordenPopularity (peliculasDatos, event.target.value);
    contenido.innerHTML=""
    cartaPeliculas(oPopu)
   //  console.log (oYear)
   }
})

const ordenarYear = document.querySelector("#ordenarPel")
ordenarYear.addEventListener("change", (event) => {
   if (event.target.value === "Release date") {
    const oYear= ordenYear(peliculasDatos, event.target.value);
    contenido.innerHTML=""
    cartaPeliculas(oYear)
    console.log (oYear)
   }
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
      const score= document.createElement("p")
      score.textContent = film.rt_score;

      const pelicula = document.createElement("div")
      pelicula.appendChild(imagen)
      pelicula.appendChild(titulo)
      pelicula.appendChild(yearlanzamiento)
      pelicula.appendChild(directorpeli)
      pelicula.appendChild(score)

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
   const score= document.createElement("Score:")
      score.textContent = film.rt_score;

   const pelicula = document.createElement("div")
   pelicula.appendChild(imagen)
   pelicula.appendChild(titulo)
   pelicula.appendChild(yearlanzamiento)
   pelicula.appendChild(directorpeli)
   pelicula.appendChild(score)

   const marco = document.createElement("div")
   marco.appendChild(pelicula)
   marco.classList.add("marco")
   fragment.appendChild(marco)
})
contenido.appendChild(fragment)


