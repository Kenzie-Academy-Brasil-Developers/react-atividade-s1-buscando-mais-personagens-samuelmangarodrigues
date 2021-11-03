import CardChar from "../CardChar";

const Characters = ({ characters }) => {
  return (
    <div className="container">
      {characters.map((character) => (
        <CardChar character={character} />
      ))}
    </div>
  );
};
export default Characters;
