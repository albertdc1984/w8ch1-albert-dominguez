import PokeList from "../components/PokeList/PokeList";

const PokemonIsr = ({ pokemonsAPI }) => {
  return (
    <>
      <h1>POKEMONS SSG</h1>
      <PokeList pokemons={pokemonsAPI} />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_POKEAPI);
  const results = await res.json();
  const pokemonPromises = Promise.all(
    results.results.map((pokemon) =>
      fetch(pokemon.url).then((response) => response.json())
    )
  );
  const pokemonsAPI = await pokemonPromises;

  return { props: { pokemonsAPI }, revalidate: 20 };
};

export default PokemonIsr;
