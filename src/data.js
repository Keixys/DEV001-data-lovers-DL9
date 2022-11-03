
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
    if (cadatitulo.title === nombredepelicula) {
      return cadatitulo;
    }
  }
  )
}

export const filtrodegenero = (datadepelicula, nombreDeGenero) => {
  const todoslospersonajes = []
  datadepelicula.forEach(film => {
    const personajes = film.people.filter(personaje => {
      if (personaje.gender === nombreDeGenero) {
        return personaje;
      }
    })
    todoslospersonajes.push(personajes)
  });
  console.log(todoslospersonajes.flat())
  return todoslospersonajes.flat()

}

export const filtrodeespecie = (dataDePelicula, nombreDeEspecie) => {
  const todoslospersonajes = []
  dataDePelicula.forEach(film => {
    const especie = film.people.filter(especie => {
      if (especie.specie === nombreDeEspecie) {
        return especie;
      }
    })
    todoslospersonajes.push(especie)
    // console.log(todoslospersonajes.push())
  });
  console.log(todoslospersonajes.flat())
  return todoslospersonajes.flat()

}


export const ordenAyZ = (datadepelicula) => {
  const ordendepersonajes = []
  datadepelicula.forEach(film => {
    const resultadouno = film.people.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      if (a.name === b.name) {
        return 0
      }
      return resultadouno
    })
    ordendepersonajes.push(resultadouno)
  });
  return ordendepersonajes.flat()
}

export const ordenZaA = (datadepelicula) => {
  const ordendepersonajes = []
  datadepelicula.forEach(film => {
    const resultado = film.people.sort((a, b) => {
      if (a.name < b.name) {
        return 1
      }
      if (a.name > b.name) {
        return -1
      }
      if (a.name === b.name) {
        return 0
      }
      return resultado
    })
    ordendepersonajes.push(resultado)
    
  });
  
  return ordendepersonajes.flat()

}

