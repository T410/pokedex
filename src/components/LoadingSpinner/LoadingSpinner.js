import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <img className={[styles.loading, styles.spin].join(' ')} src={require("../../Assets/loading.png")} />
  );
};

export default LoadingSpinner;
