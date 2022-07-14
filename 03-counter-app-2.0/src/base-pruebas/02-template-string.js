function getSaludo(nombre) {
    return 'hola ' + nombre
}

const nombre = 'juan'
console.log(`Este es un texto: ${getSaludo ( nombre ) }`)

export default getSaludo