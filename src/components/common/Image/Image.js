import React, { useState, useEffect } from "react";
import "./Image.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Image = ({ src, fallbackSrc, timeoutInterval, className }) => {
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
          className={className}
          src={src}
          onError={fallback}
          onLoad={() => setLoading(false)}
        />
      ) : (
        <img className={className} src={fallbackSrc} />
      )}
    </>
  );
};

export default Image;
