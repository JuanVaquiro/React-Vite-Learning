const personajes = ['juan', 'pedro', 'lucas'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123 ];
};

// destruturacion arreglo
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// comandos rapidos
// enf(export name function) 
// nfn(name function)

const useState = (valor) => {
    return [ valor, ()=>{ console.log( 'hola mundo' ) } ]
};


// const arr = useState('juan');
const [ nombre, setNombre] = useState ('juan');
console.log(nombre);
setNombre();
// setnombre();
