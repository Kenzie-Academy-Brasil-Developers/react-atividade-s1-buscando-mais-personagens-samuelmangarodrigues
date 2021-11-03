import "./App.css";
import Characters from "./components/Characters";
import { useState, useEffect } from "react";
function App() {
  const [characters, setCharacters] = useState([]);
  const [newPage, setNewPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${newPage}`)
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((err) => console.log(err));
  }, [newPage]);

  const NextPage = () => {
    setNewPage(newPage + 1);
  };
  const subClick = () => {
    if (newPage > 1) {
      setNewPage(newPage - 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personagens</h1>

        <Characters
          characters={characters}
          handleClick={NextPage}
          subClick={subClick}
        />
        <div className="contBtns">
          <button className="btns" onClick={subClick}>
            Anterior
          </button>
          <button className="btns" onClick={NextPage}>
            Próximo
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
