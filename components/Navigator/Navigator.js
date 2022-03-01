import styles from "./Navigator.module.css";
import Link from "next/link";

const Navigator = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Pokemons Next</h1>
      <nav>
        <ul className={styles.list}>
          <li key="1">
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li key="2">
            <Link href="/pokemon">
              <a>Pokemon</a>
            </Link>
          </li>
          <li key="3">
            <Link href="/pokemon-ssg">
              <a>Mis pokémon SSG</a>
            </Link>
          </li>
          <li key="4">
            <Link href="/pokemon-ssr">
              <a>Mis pokémon SSR</a>
            </Link>
          </li>
          <li key="5">
            <Link href="/pokemon-ssr">
              <a>Mis pokémon ISR</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;
