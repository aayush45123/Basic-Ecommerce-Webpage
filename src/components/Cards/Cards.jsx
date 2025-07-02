import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  const { filteredProducts } = useContext(ProductsContext);

  return (
    <div className="cards-container">
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards;
