export const usContext =  ({ clave, nombre, edad, rango = 'Capitan'}) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123.344,
            lng: -123.421,
        }
    }

}