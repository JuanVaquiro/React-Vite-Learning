import { useState } from "react";
import PropTypes from 'prop-types';

const newMessage = {
  message: "Hola Padre este es el msm;",
  conter: "Saludo Dirigido",
};

const FntSuma = (b, c) => {
  const a = b * c;
  return a;
};

const App = ({ title, subTitle }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <p>{subTitle }</p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>   
        <br/>
        <span>{FntSuma(2, 3)}</span> 
        <br/>
        <code>{JSON.stringify(newMessage)}</code>
      </header>
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}

App.defaultProps = {
  title: 'quihubo'
}


export default App;
