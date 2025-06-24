import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from 'react-router-dom';
import { ProductProvider } from "../src/context/ProductsContext";
import { CartProvider } from "../src/context/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </Router>
);
