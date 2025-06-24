import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus/AboutUs";
import "./App.css";
import ProductDetail from "./pages/Products/ProductDetail";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import ThankYou from "./pages/ThankYou/ThankYou";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* ← New */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} /> {/* ← New */}
        <Route path="/thank-you" element={<ThankYou />} /> {/* ← New */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
