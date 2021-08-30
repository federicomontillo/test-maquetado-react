import React, { useState } from "react";

import { SaleComponent } from "../sale/SaleComponent";
import { Sidebar } from "../sidebar/Sidebar";

import "./pages.css";

export const Sale = () => {
  const [category, setCategory] = useState({
    category: "shoes",
    waist: "",
    color: "",
  });

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pages-container">
      <div className="pages-container__sale">
        <Sidebar handleChange={handleChange} category={category} />
        <SaleComponent category={category} />
      </div>
    </div>
  );
};
