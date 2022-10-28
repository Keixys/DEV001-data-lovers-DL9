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
export const filtrodegenero = (datadepelicula, nombreDeGenero)=> {
  const todoslospersonajes =[]
  datadepelicula.forEach(film => {
    const personajes = film.people.filter(personaje =>{
      if(personaje.gender === nombreDeGenero){
        return personaje;
      }
    })
    todoslospersonajes.push(personajes)
  });
  console.log(todoslospersonajes.flat())
}
//   datapelicula.forEach(film => {
//     film.people.forEach(personaje => {
//    personaje.filter(cadaGenero => {
//       if (cadaGenero.gender == nombredegenero){
//         return cadaGenero;
//       }
//     })
//     });
//   })

// }

//   return datapersonaje.filter(cadaGenero => {
//     console.log("gender", cadaGenero.gender)
//     console.log("gender", cadaGenero)
//     if (cadaGenero.gender == nombredegenero){
//       return cadaGenero;
//     }
//   }
//   )
// }

export const filtrodeespecie = (datapersonaje, nombredeespecie) => {
  return datapersonaje.filter(cadaEspecie => {
     console.log("specie", cadaEspecie.specie)
     console.log("specie", cadaEspecie)
    if (cadaEspecie.specie === nombredeespecie) {
      return cadaEspecie;
    }
  }
  )
}


// export const ordenAyZ = (datadepelicula) => {
//  return datadepelicula.sort(function (a, b) {
//     if (a.name < b.name) 
//       return -1
    
//     if (a.name > b.name) {
//       return 1
//     }
//     return 0 
//   })

// }
