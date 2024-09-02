//Crea una copia profunda del objeto estudiante utilizando el método
//JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
//original no haya sido alterado.

const estudiante = {
    nombre: 'nombre',
    edad: 'edad',
    direc: direccion,
}

const direccion = {
    calle: 'calle 123',
    ciudad: 'CdeleU',
    pais: 'Argentina'
}

const estudianteCopia = JSON.parse(JSON.stringify(estudiante));

estudianteCopia.nombre = 'nombreCambiado'

console.log(estudiante)
console.log(estudianteCopia)