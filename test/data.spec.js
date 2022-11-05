import { filtrodedirector, filtrodepersonaje, filtrodegenero, filtrodeespecie, ordenAyZ, ordenZaA, ordenAyZpel } from '../src/data.js';

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
    let pelPrueba = [
      {
        nombrePeli: 'pel',
        people: [{
          gender: 'Motomami'
        }]
      },
      {
        nombrePeli1: 'pel1',
        people: [{
          gender: 'Female',
        }]
      }
    ]
    let genero = 'Female';

    let resultadoEsperado = [{ gender: 'Female' }]
    let resultadoReal = filtrodegenero(pelPrueba, genero)
    //Yo espero que resultadoReal sea igual al resultadoEsperado
    expect(resultadoReal).toEqual(resultadoEsperado);

  });
});

describe('filtrodeespecie', () => {
  //it es cada caso de testeo
  it('filtra los personajes por especie', () => {
    let pelPrueba = [
      {
        nombrePeli: 'pel',
        people: [{
          specie: 'Motomami'
        }]
      },
      {
        nombrePeli1: 'pel1',
        people: [{
          specie: 'Totoro',
        }]
      }
    ]
    let especie = 'Totoro';

    let resultadoEsperado = [{ specie: 'Totoro' }]
    let resultadoReal = filtrodeespecie(pelPrueba, especie)
    //Yo espero que resultadoReal sea igual al resultadoEsperado
    expect(resultadoReal).toEqual(resultadoEsperado);

  });
});

describe('ordenAyZ', () => {
  //it es cada caso de testeo
  it('ordenar los personajes de la A a la Z',() => {
    
    let namPrueba = [
      {nombrePeli: 'pel',
      people: [
    { name:'Satsuki Kusakabe' },
    { name:'Dola' },
    { name:'Yasuko Kusakabe' },
    { name:'Chu Totoro' },
  ]}
]   
    let orden = [
      {nombrePeli: 'pel1',
      people: [
    { name:'Chu Totoro' },
    { name:'Dola' },
    { name:'Satsuki Kusakabe' },
    { name:'Yasuko Kusakabe' },
  ]}
]
    let resultadoEsperado = [
      { name:'Chu Totoro' },
      { name:'Dola' },
      { name:'Satsuki Kusakabe' },
      { name:'Yasuko Kusakabe' },
    ]
    let resultadoReal = ordenAyZ(namPrueba,orden)
    //Yo espero que resultadoReal sea igual al resultadoEsperado
     expect (resultadoReal).toEqual(resultadoEsperado)
});
})

describe('ordenZaA', () => {
  //it es cada caso de testeo
  it('ordenar los personajes de la Z a la A',() => {
    
    let namPrueba = [
      {nombrePeli: 'pel',
      people: [
    { name:'Satsuki Kusakabe' },
    { name:'Dola' },
    { name:'Yasuko Kusakabe' },
    { name:'Chu Totoro' },
  ]}
]   
    let orden = [
      {nombrePeli: 'pel1',
      people: [
    { name:'Yasuko Kusakabe' },
    { name:'Satsuki Kusakabe' },
    { name:'Dola' },
    { name:'Chu Totoro'},
  ]}
]
    let resultadoEsperado = [
      { name:'Yasuko Kusakabe' },
      { name:'Satsuki Kusakabe' },
      { name:'Dola' },
      { name:'Chu Totoro'},
    ]
    let resultadoReal = ordenZaA(namPrueba,orden)
    //Yo espero que resultadoReal sea igual al resultadoEsperado
     expect (resultadoReal).toEqual(resultadoEsperado)
});
})

describe('ordenZaA', () => {
  //it es cada caso de testeo
  it('ordenar los personajes de la Z a la A',() => {
    
    let namPrueba = [
      {nombrePeli: 'pel',
      people: [
    { name:'Satsuki Kusakabe' },
    { name:'Dola' },
    { name:'Yasuko Kusakabe' },
    { name:'Chu Totoro' },
  ]}
]   
    let orden = [
      {nombrePeli: 'pel1',
      people: [
    { name:'Yasuko Kusakabe' },
    { name:'Satsuki Kusakabe' },
    { name:'Dola' },
    { name:'Chu Totoro'},
  ]}
]
    let resultadoEsperado = [
      { name:'Yasuko Kusakabe' },
      { name:'Satsuki Kusakabe' },
      { name:'Dola' },
      { name:'Chu Totoro'},
    ]
    let resultadoReal = ordenZaA(namPrueba,orden)
    //Yo espero que resultadoReal sea igual al resultadoEsperado
     expect (resultadoReal).toEqual(resultadoEsperado)
});
})

