import { DATA_UPDATE, DATA_PURGE } from "../Actions/Data/DataActionTypes";
import { REHYDRATE } from "redux-persist";
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

    case DATA_PURGE:
      return {
        ...state,
        gens: [],
      };

    case REHYDRATE:
      let data;
      if (
        action.payload &&
        action.payload.data &&
        action.payload.data.gens &&
        action.payload.data.gens.length > 0
      ) {
        data = action.payload.data.gens;
      } else {
        data = [];
      }
      return {
        ...state,
        gens: data,
      };

    default:
      return {
        ...state,
      };
  }
};

export default dataReducer;
