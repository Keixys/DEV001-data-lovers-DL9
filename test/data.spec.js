import { filtrodedirector, filtrodepersonaje, filtrodeespecie } from '../src/data.js';

//Describe sirve para agrupar muchos test que estan relacionados con la misma cosa)
describe('filtrodedirector', () => {
  //it es cada caso de testeo
  it('filtra las peliculas por director', () => {
    let array = [{ director: 'Hayao Miyazaki' }, { director: 'Gabriela Wong' }]
    let director = 'Hayao Miyazaki'
    let resultadoEsperado = [{ director: 'Hayao Miyazaki' }]
    let resultadoReal = filtrodedirector(array, director)

    //Yo espero que resultadoReal sea igual al resultadoEsperado
    expect(resultadoReal).toEqual(resultadoEsperado);

  });

  // it('returns `example`', () => {
  //   expect(example()).toBe('example');
  // });
});

describe('filtrodepersonaje', () => {
  it('filtra los personajes por cada pelicula seleccionada', () => {
    let array1 = [
      { title: 'Only Yesterday' },
      { title: 'My Neighbor Totoro' },
      { title: 'Grave of the Fireflies' },
      { title: 'Invasiones' },
    ]
    let pelicula = 'Only Yesterday'

    let resultadoEsperado = [{ title: 'Only Yesterday' }]
    let resultadoReal = filtrodepersonaje(array1, pelicula)

    //Yo espero que resultadoReal sea igual al resultadoEsperado
    expect(resultadoReal).toEqual(resultadoEsperado);

  });
});

describe('filtrodegenero', () => {
  //it es cada caso de testeo
  it('filtra los personajes por genero', () => {
    let array2= [
      {
        name: 'Dola',
        gender: 'Female',
      },
      {
        name: 'Dola',
        gender: 'Motomami'
      }
    ]

    let genero = 'Female'

    let resultadoEsperado = [{name:'Dola'}, {gender:'Female'}]
    let resultadoReal = filtrodeespecie(array2, genero)

    //Yo espero que resultadoReal sea igual al resultadoEsperado
    expect(resultadoReal).toBe(resultadoEsperado);

  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
