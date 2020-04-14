import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const toggleTheme = () => {
    if (theme === "dark") {
      dispatch(light());
    } else if (theme === "light") {
      dispatch(dark());
    }
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
    </header>
  );
};

export default Navbar;
