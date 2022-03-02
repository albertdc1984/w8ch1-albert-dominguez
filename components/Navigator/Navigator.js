import styles from "./Navigator.module.css";
import Link from "next/link";

const Navigator = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Pokemons Next</h1>
      <nav>
        <ul className={styles.list}>
          <li key="1" className={styles.li}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li key="2" className={styles.li}>
            <Link href="/pokemon">
              <a>Pokemon</a>
            </Link>
          </li>
          <li key="3" className={styles.li}>
            <Link href="/pokessg">
              <a>Mis pokémon SSG</a>
            </Link>
          </li>
          <li key="4" className={styles.li}>
            <Link href="/pokessr">
              <a>Mis pokémon SSR</a>
            </Link>
          </li>
          <li key="5" className={styles.li}>
            <Link href="/pokeisr">
              <a>Mis pokémon ISR</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;
