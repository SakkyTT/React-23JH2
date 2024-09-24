import logo from '../logo.svg';
import './App.css';
import EkaComponent from './EkaComponent';
import ClassComponent from './ClassComponent';
import Counter from './Counter';
import Product from './Product/Product';

function App() {

  // Täällä eläisi Products state

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit testi <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter/>
        {/* <EkaComponent/>
        <ClassComponent/>         */}
        <section>
          <h2>Tuotteet</h2>
          <ul>
            {/* 1. vaihtoehto props, properties */}
              <Product img="path" title="Tuotteen nimi" description="Tuote kuvaus"/>
              <Product/>
              <Product/>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
