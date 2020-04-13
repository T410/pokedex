import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

const PokemonDetail = React.lazy(() =>
  import("./Pages/PokemonDetail/PokemonDetail")
);
const PokemonList = React.lazy(() => import("./Pages/PokemonList/PokemonList"));

const AppRoutes = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/pokemon" />
      </Route>
      <div
        className={[
          styles.App,
          theme === "dark" ? styles.dark : styles.light,
        ].join(" ")}
      >
        <Navbar />
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
    </Router>
  );
};

export default AppRoutes;
