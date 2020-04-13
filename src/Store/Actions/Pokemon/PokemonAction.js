import { POKEMON_UPDATE } from "./PokemonActionTypes";
import axios from "axios";

const pokemonUpdate = (name) => {
  return (dispatch) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(({ data }) => {
      dispatch({
        type: POKEMON_UPDATE,
        payload: {
          name,
          nameToShow: name[0].toUpperCase() + name.slice(1),
          data,
        },
      });
    });
  };
};

export { pokemonUpdate };
