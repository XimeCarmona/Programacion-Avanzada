//Crea una función llamada tienePropiedad que tome un objeto y una
//cadena como parámetros, y devuelva true si el objeto tiene una
//propiedad con ese nombre, o false en caso contrario.

function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto;
}

const vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
};

console.log(tienePropiedad(vehiculo, "marca"))
console.log(tienePropiedad(vehiculo, "color"))
