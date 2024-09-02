//Elimina la propiedad disponible del objeto producto. Imprime el
//objeto antes y después de eliminar la propiedad.

const producto = {
    nombre: 'product',
    precio: '$0000',
    disponible: true,
}

for (let propiedad in producto){
    console.log(`${propiedad}: ${producto[propiedad]}`)
}

console.log(producto)

delete producto.disponible

console.log(producto)