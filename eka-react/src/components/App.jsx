import './App.css';
import EkaComponent from './EkaComponent';
import ClassComponent from './ClassComponent';
import Counter from './Counter';
import Product from './Product/Product';
import HeaderTest from './HeaderTest/HeaderTest';
import TabButton from './TabButton/TabButton';
import { PRODUCTS } from '../data/data'; // dummy data
import { useState } from 'react';

function App() {

  // Täällä eläisi Products state

  function handleSelectApp(selectedButton) {
    console.log(`Category clicked! - ${selectedButton}`);
    //selectedCategoryWrong = selectedButton; // Ei UI päivitystä
    setSelectedCategory(selectedButton);
  }

  // Tämän muokkaus ei suorita käyttöliittymän päivitystä
  //let selectedCategoryWrong = "Katekoria 1";

  // Jotta käyttöliittymä päivittyy, tarvitaan komponenttiin state
  // useState pitää luoda komponentin juureen
  // useState() palauttaa taulukon, jossa on:
  //     state muuttuja, funktio, päivittää state     (oletus arvo)
  const [selectedCategory, setSelectedCategory] = useState("Valitse kategoria");

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
            {/* Nappien on tarkoitus päivittää jotakin state arvoa
                ja tämä state päivittää komponenttia napin ulkopuollella.
                Tämän vuoksi state ei elä napin sisällä, vaan sinne lähetetään
                viittaus funktioon, joka suoritetaan korkeammalla
                tasolla. */}
            <TabButton onSelect={() => {handleSelectApp('Kategoria 1')}}>Kategoria 1</TabButton>
            <TabButton onSelect={() => {handleSelectApp('Kategoria 2')}}>Kategoria 2</TabButton>
            <TabButton onSelect={() => {handleSelectApp('Kategoria 3')}}>Kategoria 3</TabButton>
            <TabButton onSelect={() => {handleSelectApp('Kategoria 4')}}>Kategoria 4</TabButton>
          </menu>
          {/* Tähän päivittyy uusi sisältö */}
          {selectedCategory}
        </section>
      </header>
    </div>
  );
}

export default App;
