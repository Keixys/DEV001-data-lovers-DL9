import data from './data/ghibli/ghibli.js';
import { filtrodepersonaje, filtrodegenero, filtrodeespecie, ordenAyZ} from './data.js';

const contenido = document.querySelector("#listapersonajes")
const fragment = document.createDocumentFragment()

const todaslaspeliculas = data.films;


const filtropersonaje = document.querySelector("#filtropersonaje")
filtropersonaje.addEventListener("change", (event) => {
    //console.log (event.target)
    const fpersonajes = filtrodepersonaje(todaslaspeliculas, event.target.value);
    contenido.innerHTML = ""
   // console.log (fpersonajes)
    cartaFilms(fpersonajes)
})
// const resultado= filtrodegenero(data)
// console.log (resultado)o
const filtroGenero = document.querySelector("#filtroGenero")
filtroGenero.addEventListener("change",(event)=>{
    //console.log (event.target)
     const fGenero = filtrodegenero (todaslaspeliculas,event.target.value);
    console.log (fGenero)
     contenido.innerHTML = ""
     carta(fGenero)
})

const filtroEspecie = document.querySelector("#filtroEspecie")
filtroEspecie.addEventListener("change", (event) => {
    const fEspecie = filtrodeespecie(todaslaspeliculas, event.target.value);
    contenido.innerHTML = ""
   carta(fEspecie)
    
})


// const ordenarPer = document.querySelector("#ordenarPer")
// ordenarPer.addEventListener("change", (event) => {
//     const oPer= ordenAyZ (todaslaspeliculas, event.target.value);
//     console.log(oPer)
//     contenido.innerHTML= oPer
   
// })

// const ordenarPer = document.querySelector("#ordenarPer")
// ordenarPer.addEventListener ("change", (event) => {
//     const oPer= ordenAyZ (todaslaspeliculas, event.target.value);
//      contenido.innerHTML= ""
//      cartaFilms(oPer)
// })
const ordenarPer = document.querySelector("#ordenarPer")
ordenarPer.addEventListener("change", (event) => {
    if(event.target.value === "A a la Z"){
    const oPer= ordenAyZ (todaslaspeliculas, event.target.value)
    contenido.innerHTML= ""
    carta(oPer)
   console.log(oPer)
}
})

function carta(todoslospersonajes) {
        todoslospersonajes.forEach (personaje => {
            const titulo = document.createElement("p")
            titulo.textContent = personaje.name
            //console.log(personaje)
            // console.log(personaje.name);
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
        // console.log(personaje.name)
        })
        contenido.appendChild(fragment)
    
}

function cartaFilms(todoslospersonajes) {
    todoslospersonajes.forEach(film => {
        const personajes = film.people
        personajes.forEach (personaje => {
            const titulo = document.createElement("p")
            titulo.textContent = personaje.name
            console.log(personaje)
            console.log(personaje.name);
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

todaslaspeliculas.forEach(film => {
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



