//Añade un método llamado descripción al objeto libro que devuelva
//una cadena describiendo el título y el autor del libro. Invoca este
//método e imprime el resultado.

const libro = {
    titulo:'titulo',
    autor: 'autor',
    anioPublicacion: 'añopublic'
}

descripcion = function() {
    return 'El título del libro es: ' + libro.titulo, 'y escrita por el autor: ' + libro.autor
}

console.log(libro.descripcion)