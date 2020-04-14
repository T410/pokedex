import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonItem.module.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const Image = React.lazy(() => import("../Image/Image"));

const PokemonItem = ({ pokemon, pokemonID }) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  return (
    <Link className={styles.pokemonLink} to={`/pokemon/${pokemon.name}`}>
      <div className={styles.pokemonView}>
        <div className={styles.pokemonIconView}>
          <Suspense fallback={<LoadingSpinner />}>
            <Image
              src={`http://pokestadium.com/sprites/xy/${pokemon.name}.gif`}
              fallbackSrc={require("../../Assets/broken.gif")}
              timeoutInterval={5}
              className={styles.pokemonIcon}
            />
          </Suspense>
        </div>
        <div className={styles.pokemonName}><p>{name}</p></div>
      </div>
    </Link>
  );
};

export default PokemonItem;