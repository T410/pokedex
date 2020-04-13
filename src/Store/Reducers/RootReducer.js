import genReducer from "./GenReducer";
import dataReducer from "./DataReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["currentGen", "data"],
};

const rootReducer = combineReducers({
  currentGen: genReducer,
  data: dataReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
