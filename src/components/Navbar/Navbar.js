import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={require("../../img/pokemon.png")}
          className="header-logo"
          alt="logo"
        />
      </Link>
      <Pagination />
    </header>
  );
};

export default Navbar;
