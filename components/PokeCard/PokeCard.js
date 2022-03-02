import styles from "./PokeCard.module.css";

const PokeCard = ({ pokemon }) => {
  return (
    <div className={styles.pokecard}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokeCard;
