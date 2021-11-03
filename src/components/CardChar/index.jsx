import "./style.css";
const CardChar = ({ character }) => {
  return (
    <div className={character.status === "Alive" ? "cardAlive" : "cardDied"}>
      <img className="imgs" src={character.image} alt={character.name} />
      <div>
        <strong className="titles">Nome</strong>:{character.name}
      </div>
      <div>
        <strong className="titles">Espécie</strong>:{character.species}
      </div>
      <div>
        <strong className="titles">Gênero</strong>
        {character.gender}
      </div>
    </div>
  );
};
export default CardChar;
