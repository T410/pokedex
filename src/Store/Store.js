import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./Reducers/RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
const middlewares = [thunk, logger];
const composed = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composed);
const persistor = persistStore(store);

export { store, persistor };
