import React, { useState, useEffect } from "react";
import styles from "./Image.module.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Image = ({ src, fallbackSrc, timeoutInterval }) => {
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);

  const fallback = () => {
    setErrored(true);
    setLoading(false);
  };

  const timeout = setTimeout(() => {
    loading && fallback();
  }, timeoutInterval * 1000);

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}

      {!errored ? (
        <img
          className={styles.image}
          src={src}
          onError={fallback}
          onLoad={() => setLoading(false)}
        />
      ) : (
        <img className={styles.image} src={fallbackSrc} />
      )}
    </>
  );
};

export default Image;
