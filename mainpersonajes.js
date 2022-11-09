import data from './data/ghibli/ghibli.js';
import { filtrodepersonaje, filtrodegenero, filtrodeespecie, ordenAyZ, ordenZaA} from './data.js';

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

const filtroGenero = document.querySelector("#filtroGenero")
filtroGenero.addEventListener("change", (event) => {
    const fGenero = filtrodegenero(todaslaspeliculas, event.target.value);
    contenido.innerHTML = ""
    carta(fGenero)
})

const filtroEspecie = document.querySelector("#filtroEspecie")
filtroEspecie.addEventListener("change", (event) => {
    const fEspecie = filtrodeespecie(todaslaspeliculas, event.target.value);
    contenido.innerHTML = ""
    carta(fEspecie)

})

const ordenarPer = document.querySelector("#ordenarPer")
ordenarPer.addEventListener("change", (event) => {
    if (event.target.value === "A a la Z") {
        const oPer = ordenAyZ(todaslaspeliculas, event.target.value)
        contenido.innerHTML = ""
        carta(oPer)
       
    }
})
const ordenarPerReverse = document.querySelector("#ordenarPer")
ordenarPerReverse.addEventListener("change", (event) => {
    if (event.target.value === "Z a la A") {
        const oPer = ordenZaA(todaslaspeliculas, event.target.value)
        contenido.innerHTML = ""
        carta(oPer)
        
    }
})


function carta(todoslospersonajes) {
    todoslospersonajes.forEach(personaje => {
        const titulo = document.createElement("p")
        titulo.textContent = 'Name: ' +personaje.name
        const imagen = document.createElement("img")
        imagen.src = personaje.img;
        const genero = document.createElement("p")
        genero.textContent = 'Gender: ' +  personaje.gender;
        const especie = document.createElement("p")
        especie.textContent = 'Specie: ' + personaje.specie;

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
        personajes.forEach(personaje => {
            const titulo = document.createElement("p")
            titulo.textContent = 'Name: ' + personaje.name
            console.log(personaje)
            console.log(personaje.name);
            const imagen = document.createElement("img")
            imagen.src = personaje.img;
            const genero = document.createElement("p")
            genero.textContent = 'Gender: ' + personaje.gender;
            const especie = document.createElement("p")
            especie.textContent = 'Specie: ' + personaje.specie;

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
        titulo.textContent = "Name: " + personaje.name;
        const imagen = document.createElement("img")
        imagen.src = personaje.img;
        const genero = document.createElement("p")
        genero.textContent = 'Gender: ' +  personaje.gender;
        const especie = document.createElement("p")
        especie.textContent = 'Specie: ' + personaje.specie;

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

const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlace");
// se usa el all porque estamos diciendo que coja todas las barras
const barras= document.querySelectorAll(".ham span");
ham.addEventListener("click", () =>{
   enlaces.classList.toggle("activado");
   barras.forEach(child=>{child.classList.toggle(`animado`)});
 // para cada elemento de la variable barras que incluye los 3 elementos span le agregamos la clase animado 
})//toggle se usa para alternar, que va a cambiar al displey none a display flex




