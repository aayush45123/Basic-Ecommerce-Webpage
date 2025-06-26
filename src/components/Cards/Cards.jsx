import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Card from "../Card/Card"; // adjust path accordingly
import "./Cards.css";

const Cards = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="cards-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards;
