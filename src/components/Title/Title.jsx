import React from "react";
import "./Title.css";
const Title = ({ title, subtitle }) => {
  return (
    <div className="titleContainer">
      <p className="titleSubtitle">{title}</p>
      <h2 className="titleHeading">{subtitle}</h2>
    </div>
  );
};

export default Title;
