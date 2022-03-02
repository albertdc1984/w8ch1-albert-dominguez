import { useEffect, useState } from "react";
import PokeList from "../components/PokeList/PokeList";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_POKEAPI);
      const pokeResponse = await response.json();
      const pokemonPromises = Promise.all(
        pokeResponse.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
      );
      const pokemonsAPI = await pokemonPromises;
      setPokemons(pokemonsAPI);
    })();
  }, []);

  return (
    <>
      <h1>POKEMONS</h1>
      {pokemons && <PokeList pokemons={pokemons} />}
    </>
  );
};
export default Pokemon;
