import { POKEMON_UPDATE } from "../Actions/Pokemon/PokemonActionTypes";

const initialState = {
  name: null,
  nameToShow: null,
  data: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_UPDATE:
      return {
        ...state,
        name: action.payload.name,
        nameToShow: action.payload.nameToShow,
        data: action.payload.data
      };
    default:
      return {
        ...state,
      };
  }
};

export default dataReducer;
