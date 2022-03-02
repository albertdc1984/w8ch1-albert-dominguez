import styles from "./PokeList.module.css";
import PokeCard from "../PokeCard/PokeCard";

const PokeList = ({ pokemons }) => {
  return (
    <div className={styles.pokelist}>
      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokeList;
