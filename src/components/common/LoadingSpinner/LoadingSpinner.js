import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <img className={"loading spin"} src={require("../../../img/loading.png")} />
  );
};

export default LoadingSpinner;
