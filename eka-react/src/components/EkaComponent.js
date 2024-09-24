// 5kpl termejä

// 1. Components
// Kaikki Reactissa rakentuu componenteista
// Vähän sama idea kuin elementit perus HTML koodissa
// Reacts-sovellus on kokoelma componentteja
// Poikkeuksena, että React componentti on usein yhdistelmä
// HTML, CSS ja JS koodeja
// Esim: App.js (HTML js JS) App.css (css)
// Kaksi sääntöä componentilla:
//  1. Alkaa isolla kirjaimella ja uudet sanat isolla yhteen
//      PascalCase esim: NewComponent.js
//  2. Palauttaa jotakin, jonka voi renderöidä UI:n
// Componenttejä on kahta erilaista
//  1. functional component, tehty funktional
//  2. class component, tehty luokkana/objektina (vanha)

// Functional component
const EkaComponent = () => {
    return <h1>Hello, world!</h1>;
}

export default EkaComponent; // Jotta voidaan käyttää muualla


// 2. JSX
// (JavaScript XML)
// React tiedostoissa kirjoitetaan js-koodia.
// Vaikka osa näyttää HTML-koodilta, se on oikeasti JavaScriptiä
// React kääntää js/jsx tiedostot HTML muotoon selaimelle.
// Selain ei ymmärrä JSX syntaxia.

// Esim: <h1>Hello, world</h1>
// on oikeasti: React.createElement('h1', null, 'Hello, world');

// 3. ReactDOM
// ReactComponentit => ReactDOM => DOM
// Muutokset tapahtuu ensim ReactDOM:iin ja sitten tarvittaessa oikeaan DOM:iin

// 4. State
// React:in UI päivitys perustuu state:n muutoksiin
// Jokin muuttuja vaihtaa arvoa, silloin suoritetaan uusi render
// render päivittää käyttöliittymän
// React huolehtii state:n olemassa olosta ja sen muutokset täytyy
// suorittaa React:n kautta.

// 5. Hooks
// Eli state päivitykset (functional components)
// useState
// useEffect
// luokka komponenteilla eri systeemi