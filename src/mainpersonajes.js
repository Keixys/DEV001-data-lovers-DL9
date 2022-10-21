import data from './data/ghibli/ghibli.js';




const contenido = document.querySelector("#listapersonajes")
const fragment = document.createDocumentFragment()



data.films.forEach(film => {  

    film.people.forEach(personaje => {
    const titulo = document.createElement("p")
    titulo.textContent = personaje.name;
    const imagen = document.createElement("img")
    imagen.src = personaje.img;
    

    const persona = document.createElement("div")
    persona.appendChild(imagen)
    persona.appendChild(titulo)

    const marco = document.createElement("div")
    marco.appendChild(persona)
    marco.classList.add("marco")
    fragment.appendChild(marco)
})

})


contenido.appendChild(fragment)