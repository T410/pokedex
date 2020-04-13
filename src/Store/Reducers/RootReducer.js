import genReducer from "./GenReducer";
import dataReducer from "./DataReducer";
import paginationVisReducer from "./PaginationVisReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["currentGen", "data", "paginationVis"],
};

const rootReducer = combineReducers({
  currentGen: genReducer,
  data: dataReducer,
  paginationVis: paginationVisReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
