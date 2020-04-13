import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataUpdate } from "../../Store/Actions/Actions";
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css";

const PokemonList = () => {
  const data = useSelector((state) => state.data);
  const { currentGen } = useSelector((state) => state.currentGen);

  const dispatch = useDispatch();
  const pokemons = data.gens.filter((x) => x.genNumber == currentGen);
  if (!pokemons || pokemons.length == 0) {
    dispatch(dataUpdate(currentGen));
  }
  return (
    <div className="pokemon-list-outer">
      <div className="pokemon-list-inner">
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
