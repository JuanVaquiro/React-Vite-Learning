import PropTypes from 'prop-types';

const newMessage = {
  message: "Hola Padre este es el msm;",
  conter: "Saludo Dirigido",
};

const FntSuma = (b, c) => {
  const a = b * c;
  return a;
};

const App = ({ title, subTitle, name }) => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <h2>{name}</h2>
        <p>{subTitle }</p>    
        <span>{FntSuma(2, 3)}</span> 
        <br/>
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
  // title: 'quihubo',
  subTitle: 2,
  name: 'JUAN D'
}


export default App;
