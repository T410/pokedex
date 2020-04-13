import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PokemonItem.css";
// import Image from "../common/Image/Image";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
const Image = React.lazy(() => import("../common/Image/Image"));

const PokemonItem = ({ pokemon, pokemonID }) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  return (
    <Link className="pokemon-link" to={`/pokemon/${pokemon.name}`}>
      <div className="pokemon-view">
        <div className="pokemon-icon-view">
          <Suspense fallback={<LoadingSpinner />}>
            <Image
              src={`http://pokestadium.com/sprites/xy/${pokemon.name}.gif`}
              fallbackSrc={require("../../img/broken.gif")}
              timeoutInterval={5}
              className="pokemon-icon"
            />
          </Suspense>
        </div>
        <div className="pokemon-name">{name}</div>
      </div>
    </Link>
  );
};

export default PokemonItem;
