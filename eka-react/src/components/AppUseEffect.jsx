import { useEffect, useState } from 'react';
import './App.css';
import HeaderTest from './HeaderTest/HeaderTest';


function AppUseEffect() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // tiedonhaku
    // fetch('http://localhost:9000/react-apis/data.php')
    fetch('http://localhost:3001/')
      .then((response) => {
        if (!response.ok) {
          // Joko heitetään virhe
          throw new Error("Network response was not ok!");
        }
        // Tai palautetaan HTTP response json data.
        return response.json();
      })
      .then((jsonResponse) => {
        setData(jsonResponse); // Päivitetään data state
      }
      )
      .catch((error) => {
        setError('Error: ' + error.message); // Päivitetään virhe state
      });
  }, []);
  // [] dependency array, tyhjä tarkoittaa, että tämä useEffect 
  // suoritetaan kun komponentti lisätään (oikeaan) DOM:iin

  return (
    <div className="App">
      <header className="App-header">
        {/* Otetaan React-sovelluksesta yhteys PHP-palvelimeen */}
        {/* Käynnistetään Docker PHP-container */}

        {error && <p>{error}</p>} {/* jos error != null */}
        {data ? (
          <div>
            <h2>{data.message}</h2>
            <h3>Users:</h3>
            <ul>
              {data.users.map((user)=>(
                <li key={user.id}>{user.name}</li>
              )
              )}
            </ul>
          </div>
        ) : (
          <p>Loading....</p>
        )
        }

      </header>
    </div>
  );
}

export default AppUseEffect;
