import React from "react";

export const MainHeaderBlock = ({ title, text, btn, img }) => {
  console.log("---pic---", img);
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      {btn && <button>{btn.title}</button>}
      <img src={img} alt="Product" />
    </div>
  );
};
