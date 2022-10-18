import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// for(let i = 0; i<data.films.length; i++){
// console.log(data.films[i].title)
// }

console.log(data.films);

const datos = data
const template = document.querySelector("#lista").content
const fragment = document.createDocumentFragment()

data.films.forEach(titulo => {
    template.querySelector('#titulo').textContent = titulo  
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

template.appendChild(fragment)