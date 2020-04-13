import React, { useState, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../Store/Actions/Actions";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "./PokemonDetail.module.css";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
const Image = React.lazy(() => import("../../Components/Image/Image"));

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const paginationVisible = useSelector((state) => state.paginationVis.visible);
  if (paginationVisible) {
    dispatch(hide());
  }

  const { name } = useRouteMatch().params;
  const nameToShow = name[0].toUpperCase() + name.slice(1);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(({ data }) => {
      setDetails(data);
    });
  }, []);

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
            {details && (
              <>
                <Image
                  src={`http://pokestadium.com/sprites/xy/${name}.gif`}
                  fallbackSrc={require("../../Assets/broken.gif")}
                  timeoutInterval={5}
                />
                <p className={styles.pokemonName}>{nameToShow}</p>
                <div className={styles.detailInnerView}>
                  <div className={styles.detailItem}>
                    <p>ID:</p>
                    <p className={styles.value}>{details.id}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <p>Type:</p>
                    {details.types.map((type, index) => (
                      <p className={styles.value} key={index}>
                        {type.type.name}
                      </p>
                    ))}
                  </div>
                  <div className={styles.detailItem}>
                    <p>Height:</p>
                    <p className={styles.value}>{details.height}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <p>Abilities:</p>
                    <br />
                    <ul className={styles.detailUl}>
                      {details.abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
