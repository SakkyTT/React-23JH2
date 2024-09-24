import './App.css';
import EkaComponent from './EkaComponent';
import ClassComponent from './ClassComponent';
import Counter from './Counter';
import Product from './Product/Product';
import HeaderTest from './HeaderTest/HeaderTest';
import { PRODUCTS } from '../data/data'; // dummy data

function App() {

  // Täällä eläisi Products state

  return (
    <div className="App">
      <header className="App-header">
        <HeaderTest/>
        <Counter />
        {/* <EkaComponent/>
        <ClassComponent/>         */}
        <section>
          <h2>Tuotteet</h2>
          <ul>
            {/* 1. vaihtoehto props, properties */}
            <Product
              img={PRODUCTS[0].img}
              title={PRODUCTS[0].title}
              description={PRODUCTS[0].description} />
              {/* Voi käyttää destructure ... syntaksia, jos
                  lähde datan avaimet ovat samat kuin componentin
                  avaimet. */}
            <Product
              {...PRODUCTS[1]} />
            <Product
              {...PRODUCTS[2]} />
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
