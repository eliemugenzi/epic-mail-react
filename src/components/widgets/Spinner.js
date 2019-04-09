import React from "react";

const Spinner = () => {
  const imageUrl =
    "https://loading.io/spinners/bars/index.progress-bar-facebook-loader.svg";
  return (
    <div className="spinner">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default Spinner;
