import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// for(let i = 0; i<data.films.length; i++){
// console.log(data.films[i].title)
// }
const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlace");
// se usa el all porque estamos diciendo que coja todas las barras
const barras= document.querySelectorAll(".ham span");


ham.addEventListener("click", () =>{
    enlaces.classList.toggle("activado");
    barras.forEach(child=>{child.classList.toggle(`animado`)});
  // para cada elemento de la variable barras que incluye los 3 elementos span le agregamos la clase animado 
})//toggle se usa para alternar, que va a cambiar al displey none a display flex

console.log(data)


