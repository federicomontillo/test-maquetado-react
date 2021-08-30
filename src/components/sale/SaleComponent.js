import React, { useState, useEffect } from "react";
import { Card } from "../card/Card";

import "./salecomponent.css";


export const SaleComponent = ({ category }) => {

  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("db-shoes.json")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
      });
  }, []);

  const categoryFilter = shoes.filter(
    (shoes) => shoes.category === category.category
  );

  const waistFilter = category.waist
    ? categoryFilter.filter((shoes) => shoes.waist === category.waist)
    : categoryFilter;

  const colorFilter = category.color
    ? waistFilter.filter((shoes) => shoes.color === category.color)
    : waistFilter;

  const shoesFilter = colorFilter;

  const cardShoes = shoesFilter.length === 0 ? 
    (
      <h3 className="justify-content-center text-center">No se encontraron resultados para esta búsqueda.</h3>
    ) 
    : 
    (
      <div className="sale-component">
        {shoesFilter.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} />
        ))}
      </div>
    );

  return <>{cardShoes}</>;
  
};
