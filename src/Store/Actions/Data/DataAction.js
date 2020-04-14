import { DATA_UPDATE, DATA_PURGE } from "./DataActionTypes";
import axios from "axios";

const dataUpdate = (genNumber) => {
  const getID = (val) => {
    let ID = val.split("/");
    return parseInt(ID[ID.length - 2]);
  };

  /**
   * To compare and return the compared result
   * @param {number} a
   * @param {number} b
   */
  const compare = (a, b) => {
    const aID = getID(a.url),
      bID = getID(b.url);

    let comparison = 0;
    if (aID > bID) {
      comparison = 1;
    } else if (aID < bID) {
      comparison = -1;
    }
    return comparison;
  };
  return (dispatch) => {
    axios
      .get(`https://pokeapi.co/api/v2/generation/${genNumber}/`)
      .then(({ data }) => {
        const pokemons = data.pokemon_species.sort(compare);
        dispatch({
          type: DATA_UPDATE,
          payload: {
            genNumber,
            data: pokemons,
          },
        });
      });
  };
};

const dataPurge = () => ({
  type: DATA_PURGE,
});

export { dataUpdate, dataPurge };
