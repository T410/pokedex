import { CHOOSE_GEN } from "../Actions/Gen/GenActionTypes";

const initialState = {
  currentGen: 1,
};

const genReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_GEN:
      return {
        ...state,
        currentGen: action.payload.currentGen,
      };

    default:
      return {
        ...state,
      };
  }
};

export default genReducer;
