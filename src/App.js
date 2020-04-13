import React, { Suspense } from "react";
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import { store, persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider} from "react-redux";

const PokemonDetail = React.lazy(() =>
  import("./Pages/PokemonDetail/PokemonDetail")
);
const PokemonList = React.lazy(() =>
  import("./Pages/PokemonList/PokemonList")
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/">
            <Redirect to="/pokemon" />
          </Route>
          <div className={styles.App}>
            <Navbar />
            {/* <div className={styles.content}> */}
              <Switch>
                <Route exact path="/pokemon">
                  <Suspense fallback={<LoadingSpinner />}>
                    <PokemonList />
                  </Suspense>
                </Route>
                <Route path="/pokemon/:name">
                  <Suspense fallback={<LoadingSpinner />}>
                    <PokemonDetail />
                  </Suspense>
                </Route>
              </Switch>
            {/* </div> */}
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
