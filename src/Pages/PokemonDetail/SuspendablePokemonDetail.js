import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../Components/Components";
import styles from "./PokemonDetail.module.css";
const Image = React.lazy(() => import("../../Components/Image/Image"));

const SuspendablePokemonDetail = () => {
  const { nameToShow, name, data } = useSelector(
    (state) => state.pokemon
  );
  return (
    <>
      {data && (
        <>
          <Suspense fallback={<LoadingSpinner />}>
            <Image
              src={`http://pokestadium.com/sprites/xy/${name}.gif`}
              fallbackSrc={require("../../Assets/broken.gif")}
              timeoutInterval={5}
            />
          </Suspense>
          <p className={styles.pokemonName}>{nameToShow}</p>
          <div className={styles.detailInnerView}>
            <div className={styles.detailItem}>
              <p>ID:</p>
              <p className={styles.value}>{data.id}</p>
            </div>
            <div className={styles.detailItem}>
              <p>Type:</p>
              {data.types.map((type, index) => (
                <p className={styles.value} key={index}>
                  {type.type.name}
                </p>
              ))}
            </div>
            <div className={styles.detailItem}>
              <p>Height:</p>
              <p className={styles.value}>{data.height}</p>
            </div>
            <div className={styles.detailItem}>
              <p>Abilities:</p>
              <br />
              <ul className={styles.detailUl}>
                {data.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SuspendablePokemonDetail;
