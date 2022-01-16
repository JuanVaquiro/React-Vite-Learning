import ReactDOM from 'react-dom'
import PrimeraApp from './App';
import './main.css';



const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimeraApp saludo='hola, soy juan' />, divRoot );



// import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// )
