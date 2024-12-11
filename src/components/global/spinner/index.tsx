import React from "react";
import "./style.scss";
const Spinner = ({ text }: { text: string }) => {
  return (
    <div className="container">
      <div className="spinner-block">
        <div className="spinner spinner-1"></div>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Spinner;
