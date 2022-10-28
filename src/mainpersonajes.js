import data from './data/ghibli/ghibli.js';
import { filtrodepersonaje, ordenAyZ } from './data.js';

const contenido = document.querySelector("#listapersonajes")
const fragment = document.createDocumentFragment()

const todoslospersonajes = data.films;

const filtropersonaje = document.getElementById("filtropersonaje")
filtropersonaje.addEventListener("change", (event) => {
    const fpersonajes = filtrodepersonaje (todoslospersonajes, event.target.value);
    contenido.innerHTML=""
    carta(fpersonajes)

})

const ordenarPer = document.querySelector("#ordenarPer")
ordenarPer.addEventListener("change", (event) => {
    const oPer= ordenAyZ (todoslospersonajes, event.target.value);
    contenido.innerHTML=""
    carta(oPer)

})

function carta (todoslospersonajes){
todoslospersonajes.forEach(film => {  
    film.people.forEach(personaje => {
    const titulo = document.createElement("p")
    titulo.textContent = personaje.name;
    const imagen = document.createElement("img")
    imagen.src = personaje.img;
    const genero = document.createElement("p")
    genero.textContent = personaje.gender;
    const especie = document.createElement("p")
    especie.textContent = personaje.specie;
    
    const persona = document.createElement("div")
    persona.appendChild(imagen)
    persona.appendChild(titulo)
    persona.appendChild(genero)
    persona.appendChild(especie)

    const marco = document.createElement("div")
    marco.appendChild(persona)
    marco.classList.add("marco")
    fragment.appendChild(marco)
})
contenido.appendChild(fragment)
})
}

todoslospersonajes.forEach(film => {  
    film.people.forEach(personaje => {
    const titulo = document.createElement("p")
    titulo.textContent = personaje.name;
    const imagen = document.createElement("img")
    imagen.src = personaje.img;
    const genero = document.createElement("p")
    genero.textContent = personaje.gender;
    const especie = document.createElement("p")
    especie.textContent = personaje.specie;
    
    const persona = document.createElement("div")
    persona.appendChild(imagen)
    persona.appendChild(titulo)
    persona.appendChild(genero)
    persona.appendChild(especie)

    const marco = document.createElement("div")
    marco.appendChild(persona)
    marco.classList.add("marco")
    fragment.appendChild(marco)
})
contenido.appendChild(fragment)
})


// todoslospersonajes.forEach(title => {
// title.innerHTML= document.getElementById ("personajes")
// const html = "<option> `${ title }` </option>"
// title.insertAdjacentHTML("", html)
// console.log ("title", title)



