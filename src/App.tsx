import logo from './logo.png';
import './App.css';

const linkWapp = 'https://api.whatsapp.com/send?phone=+573103822900&text=Hola!%20Quiero%20m%C3%A1s%20info%20acerca%20de%20';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sitio web en construcción...</p>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          El Agua es vida y la Vida es Amor.
        </h1>
        <p>Personal 250 ml.</p>
        <p>Agua para hielo 520 ml.</p>
        <p>Hogar 2200 ml.</p>
        <a
          className="App-link"
          href={linkWapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos
        </a>
      </header>
    </div>
  );
}

export default App;
