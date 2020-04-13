import { SHOW, HIDE } from "../Actions/PaginationVis/PaginationVisActionTypes";

const initialState = {
  visible: false,
};

const paginationVisReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        visible: true,
      };

    case HIDE:
      return {
        ...state,
        visible: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default paginationVisReducer;
