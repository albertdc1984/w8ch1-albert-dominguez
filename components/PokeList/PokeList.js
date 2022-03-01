import PokeCard from "../PokeCard/PokeCard";

const PokeList = (pokemons) => {
  return (
    <div className="poke-list">
      {pokemons.map((pokemon) => {
        <PokeCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};

export default PokeCard;
