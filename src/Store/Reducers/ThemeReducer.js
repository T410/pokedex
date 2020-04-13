import { DARK, LIGHT } from "../Actions/Theme/ThemeActionTypes";
import { REHYDRATE } from "redux-persist";

const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK:
      return {
        ...state,
        theme: "dark",
      };

    case LIGHT:
      return {
        ...state,
        theme: "light",
      };

    case REHYDRATE:
      return {
        ...state,
        theme: action.payload.theme.theme,
      };

    default:
      return {
        ...state,
      };
  }
};

export default themeReducer;
