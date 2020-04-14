import genReducer from "./GenReducer";
import dataReducer from "./DataReducer";
import pokemonReducer from "./PokemonReducer";
import paginationVisReducer from "./PaginationVisReducer";
import themeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import {
  rootPersistConfig,
  dataPersistConfig,
} from "../PersistorConfigs/Config";

const rootReducer = combineReducers({
  currentGen: genReducer,
  data: persistReducer(dataPersistConfig, dataReducer),
  paginationVis: paginationVisReducer,
  pokemon: pokemonReducer,
  theme: themeReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
