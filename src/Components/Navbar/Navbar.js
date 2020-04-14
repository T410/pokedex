import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purgeStoredState } from "redux-persist";
import { dataPersistConfig } from "../../Store/PersistorConfigs/Config";
import {
  dark,
  light,
  dataPurge,
  dataUpdate,
} from "../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentGen } = useSelector((state) => state.currentGen);

  const toggleTheme = () => {
    if (theme === "dark") {
      dispatch(light());
    } else if (theme === "light") {
      dispatch(dark());
    }
  };

  const purgePersist = () => {
    purgeStoredState(dataPersistConfig);
    dispatch(dataPurge());
    dispatch(dataUpdate(currentGen));
  };

  const paginationVisible = useSelector((state) => state.paginationVis.visible);
  return (
    <header className={styles.navbar}>
      <Link to="/">
        <img
          src={require("../../Assets/pokemon.png")}
          className={[
            styles.headerLogo,
            `${paginationVisible ? styles.logoShrink : styles.logoExpand}`,
          ].join(" ")}
          alt="logo"
        />
      </Link>
      <Pagination />
      <button className={styles.themeButton} onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button className={styles.purgeButton} onClick={purgePersist}>
        Hard Reload
      </button>
    </header>
  );
};

export default Navbar;
