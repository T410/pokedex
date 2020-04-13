import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Welcome } from "./components/components";
import LoadingSpinner from "./components/common/LoadingSpinner/LoadingSpinner";
import { store, persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";

const PokemonDetail = React.lazy(() =>
  import("./components/PokemonDetail/PokemonDetail")
);
const PokemonList = React.lazy(() =>
  import("./components/PokemonList/PokemonList")
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/">
            <Redirect to="/pokemon" />
          </Route>
          <div className="App">
            <Navbar />
            <div className="content">
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
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
