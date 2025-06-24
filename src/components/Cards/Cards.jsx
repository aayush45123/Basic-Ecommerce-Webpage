import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="cards-container">
      {products.map((product) => {
        const discount = Math.round(product.discountPercentage);

        return (
          <Link to={`/product/${product.id}`} className="card" key={product.id}>
            <div className="card-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="card-details">
              <div className="card-brand">
                <span className="brand-main">{product.brand}</span>
                <span className="brand-sub">{product.title}</span>
              </div>
              <p className="card-tagline">
                {product.description.length > 40
                  ? product.description.slice(0, 40) + "..."
                  : product.description}
              </p>
              <p className="card-offer">Min. {discount}% Off</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
