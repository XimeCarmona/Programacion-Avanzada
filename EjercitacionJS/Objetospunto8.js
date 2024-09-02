//Usa Object.assign para combinar dos objetos, persona1 y persona2,
//en un nuevo objeto. Imprime el resultado.

const persona1 = {
    nombre: 'Marcelo',
    apellido: 'Gallardo'
}

const persona2 = {
    edad: 48,
    equipo: 'River Plate'
}

const combinacion= Object.assign({}, persona1, persona2)

console.log('Nueva persona: ', combinacion)