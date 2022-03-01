const Pokemon = ({ results }) => {
  return (
    <>
      {results.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
  const { results } = await res.json();
  return { props: { results } };
};

export default Pokemon;
