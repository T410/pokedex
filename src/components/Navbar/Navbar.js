import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const paginationVisible = useSelector((state) => state.paginationVis.visible);
  return (
    <header className={styles.navbar}>
      <Link to="/">
        <img
          src={require("../../Assets/pokemon.png")}
          className={[styles.headerLogo, `${paginationVisible ? styles.logoShrink : styles.logoExpand}`].join(" ")}
          alt="logo"
        />
      </Link>
      <Pagination />
      <div />
    </header>
  );
};

export default Navbar;
