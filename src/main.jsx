import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from 'react-router-dom';
import { ProductProvider } from "../src/context/ProductsContext";
import { CartProvider } from "../src/context/CardContext";
import { WishlistProvider } from "./context/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CartProvider>
      <WishlistProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
      </WishlistProvider>
    </CartProvider>
  </Router>
);
