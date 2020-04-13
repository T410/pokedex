import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";
import "./PokemonDetail.css";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
const Image = React.lazy(() => import("../common/Image/Image"));

const PokemonDetail = () => {
  const { name } = useRouteMatch().params;
  const nameToShow = name[0].toUpperCase() + name.slice(1);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(({ data }) => {
      setDetails(data);
    });
  }, []);

  return (
    <div className="detail-outer-view">
      <div className="detail-middle-view">
        <div className="back-view">
          <Link to="/pokemon">
            <img className="back" src={require("../../img/back.png")} />
          </Link>
        </div>
        <div className="detail-icon-view">
          <Suspense fallback={<LoadingSpinner />}>
            {details && (
              <>
                <Image
                  src={`http://pokestadium.com/sprites/xy/${name}.gif`}
                  fallbackSrc={require("../../img/broken.gif")}
                  timeoutInterval={5}
                  className="detail-pokemon-icon"
                />
                <p className={"pokemon-name"}>{nameToShow}</p>
                <div className="detail-inner-view">
                  <div className="detail-item">
                    <p>ID:</p>
                    <p className="value">{details.id}</p>
                  </div>
                  <div className="detail-item">
                    <p>Type:</p>
                    {details.types.map((type, index) => (
                      <p className="value" key={index}>
                        {type.type.name}
                      </p>
                    ))}
                  </div>
                  <div className="detail-item">
                    <p>Height:</p>
                    <p className="value">{details.height}</p>
                  </div>
                  <div className="detail-item">
                    <p>Abilities:</p>
                    <br />
                    <ul className="detail-ul">
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
