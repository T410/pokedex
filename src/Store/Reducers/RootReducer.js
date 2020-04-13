import genReducer from "./GenReducer";
import dataReducer from "./DataReducer";
import pokemonReducer from "./PokemonReducer";
import paginationVisReducer from "./PaginationVisReducer";
import themeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["currentGen", "data", "paginationVis", "pokemon"],
};

const rootReducer = combineReducers({
  currentGen: genReducer,
  data: dataReducer,
  paginationVis: paginationVisReducer,
  pokemon: pokemonReducer,
  theme: themeReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
