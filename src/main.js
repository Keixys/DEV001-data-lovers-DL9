import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// for(let i = 0; i<data.films.length; i++){
// console.log(data.films[i].title)
// }

console.log(data.films);


const contenido = document.querySelector("#lista")
const fragment = document.createDocumentFragment()

data.films.forEach(film => {
    const titulo = document.createElement("p")
    titulo.textContent = film.title;
    const imagen = document.createElement("img")
    imagen.src = film.poster;

    const pelicula = document.createElement("div")
    pelicula.appendChild(titulo)
    pelicula.appendChild(imagen)
    const marco = document.createElement("div")
    marco.appendChild(pelicula)
    marco.classList.add("marco")
    fragment.appendChild(marco)
})

contenido.appendChild(fragment)