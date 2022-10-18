import React from "react";
import { Link } from "react-router-dom";
import "./WhiteButton.scss";

export const WhiteButton = ({ title, location, anotherStyles }) => {
  return (
    <Link className="mainBtn" to={location} style={{ ...anotherStyles }}>
      {title}
    </Link>
  );
};
