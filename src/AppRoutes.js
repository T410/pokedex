import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
      <div
        className={[
          styles.App,
          theme === "dark" ? styles.dark : styles.light,
        ].join(" ")}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/pokemon" replace />} />
          <Route
            path="/pokemon"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PokemonList />
              </Suspense>
            }
          />
          <Route
            path="/pokemon/:name"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PokemonDetail />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
