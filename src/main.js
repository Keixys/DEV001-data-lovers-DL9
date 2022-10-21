import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// for(let i = 0; i<data.films.length; i++){
// console.log(data.films[i].title)
// }




const contenido = document.querySelector("#lista")
const fragment = document.createDocumentFragment()

data.films.forEach(film => {
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
})

contenido.appendChild(fragment)