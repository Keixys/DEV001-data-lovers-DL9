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

export const filtrodefechas = (datapelicula,fecha) => {
datapelicula.filter(movie => {
  if (movie.release_date === fecha) { 
      return movie;
    }
  
})

}

;
// }
// export default datalover;