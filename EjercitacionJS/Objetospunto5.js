//Modifica el valor de la propiedad precio del objeto producto y luego
//imprime el objeto completo para verificar el cambio.

const producto = {
    nombre: 'product',
    precio: 1000,
    disponible: true,
}

precio = 965

for (let propiedad in producto){
    console.log(`${propiedad}: ${producto[propiedad]}`)
}

