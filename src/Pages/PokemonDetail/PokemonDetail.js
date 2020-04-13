import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide, pokemonUpdate } from "../../Store/Actions/Actions";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "./PokemonDetail.module.css";
import { LoadingSpinner } from "../../Components/Components";
const SuspandablePokemonDetail = React.lazy(() =>
  import("./SuspendablePokemonDetail")
);

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const paginationVisible = useSelector((state) => state.paginationVis.visible);
  useEffect(() => {
    if (paginationVisible) {
      dispatch(hide());
    }
  }, []);

  const pokemon = useSelector((state) => state.pokemon);
  const { name } = useRouteMatch().params;
  useEffect(() => {
    if (pokemon.name !== name) {
      dispatch(pokemonUpdate(name));
    }
  }, [name]);

  return (
    <div className={styles.detailOuterView}>
      <div className={styles.detailMiddleView}>
        <div className={styles.backView}>
          <Link to="/pokemon">
            <img
              className={styles.back}
              src={require("../../Assets/back.png")}
            />
          </Link>
        </div>
        <div className={styles.detailIconView}>
          <Suspense fallback={<LoadingSpinner />}>
            <SuspandablePokemonDetail />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
