import React from "react";

import "./card.css";

export const Card = ({ shoe }) => {
  const { name, price, img } = shoe;

  return (
    <div className="card-product">
      <img src={img} alt="shoes" />
      <h5>{name}</h5>
      <p>${price}</p>
    </div>
  );
};
