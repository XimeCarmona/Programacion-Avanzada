//Crea una función llamada crearPersona que tome nombre y edad
//como parámetros y devuelva un objeto con esas propiedades.

function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
    }
}

const persona = crearPersona(Emilia, 29)

console.log(persona)