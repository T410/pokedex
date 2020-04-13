import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataUpdate, show } from "../../Store/Actions/Actions";
import { PokemonItem } from "../../Components/Components";
import styles from "./PokemonList.module.css";

const PokemonList = () => {
  const dispatch = useDispatch();
  const paginationVisible = useSelector((state) => state.paginationVis.visible);
  if (!paginationVisible) {
    dispatch(show());
  }

  const data = useSelector((state) => state.data);
  const { currentGen } = useSelector((state) => state.currentGen);

  const pokemons = data.gens.filter((x) => x.genNumber == currentGen);
  if (!pokemons || pokemons.length == 0) {
    dispatch(dataUpdate(currentGen));
  }
  return (
    <div className={styles.pokemonListOuter}>
      <div className={styles.genInfo}>
        <p>Generation: {currentGen}</p>
      </div>
      <div className={styles.pokemonListInner}>
        {pokemons.length > 0 &&
          pokemons[0].data.map((element, index) => (
            <PokemonItem
              pokemon={element}
              pokemonID={index + 1}
              key={index + 1}
            />
          ))}
      </div>
    </div>
  );
};

export default PokemonList;
