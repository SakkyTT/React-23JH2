import './App.css';
import EkaComponent from './EkaComponent';
import ClassComponent from './ClassComponent';
import Counter from './Counter';
import Product from './Product/Product';
import HeaderTest from './HeaderTest/HeaderTest';
import TabButton from './TabButton/TabButton';
import { PRODUCTS } from '../data/data'; // dummy data

function App() {

  // Täällä eläisi Products state

  function handleSelect() {
    console.log("Category clicked! - selected");
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeaderTest />
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
        <section>
          <h2>Kategoriat</h2>
          <menu>
            {/* 2. tapa: component composition */}
            {/* kaikkea lapsi dataa ei tarvitse pyörittää propsien kautta */}
            <TabButton onSelect={handleSelect}>Kategoria 1</TabButton>
            <TabButton onSelect={handleSelect}>Kategoria 2</TabButton>
            <TabButton onSelect={handleSelect}>Kategoria 3</TabButton>
            <TabButton onSelect={handleSelect}>Kategoria 4</TabButton>
          </menu>
          {/* Tähän päivittyy uusi sisältö */}
        </section>
      </header>
    </div>
  );
}

export default App;
