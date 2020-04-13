import { DATA_UPDATE } from "../Actions/Data/DataActionTypes";

const initialState = {
  gens: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_UPDATE:
      return {
        ...state,
        gens: [...state.gens, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default dataReducer;
