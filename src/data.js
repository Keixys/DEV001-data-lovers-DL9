// import marco from "./mainpeliculas";

//const datalover={

//import data from './data/ghibli/ghibli.js';

// estas funciones son de ejemplo

// export const movie = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const filtrodedirector = (datapelicula, director) => {
  return datapelicula.filter(cadadirector => {
    // console.log("director", cadadirector.release_date)
    // console.log("director",director)
    if (cadadirector.director === director) {
      return cadadirector;
    }
  }
  )
}
export const filtrodepersonaje = (datapelicula, nombredepelicula) => {
  return datapelicula.filter(cadatitulo => {
    // console.log("title", cadatitulo.title)
    // console.log("title", cadatitulo)
    if (cadatitulo.title === nombredepelicula) {
      return cadatitulo;
    }
  }
  )
}


export const ordenAyZ = (datadepelicula) => {
 return datadepelicula.sort(function (a, b) {
    if (a.name < b.name) 
      return -1
    
    if (a.name > b.name) {
      return 1
    }
    return 0 
  })

}
