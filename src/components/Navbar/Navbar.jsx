import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar-container ${scrolled ? "glass" : ""}`}>
        <div className="nav-left">ECOMMERCE</div>

        <div className="nav-right">
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/kids">Kids</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">
                <FaHeart title="Wishlist" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <FaCartArrowDown title="Cart" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) =>
                window.dispatchEvent(
                  new CustomEvent("search", { detail: e.target.value })
                )
              }
            />
          </div>
        </div>

        <div className="mobile-nav" onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu className="hamburger" />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <IoClose size={28} />
        </div>
        <ul>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/men" onClick={() => setMenuOpen(false)}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="/women" onClick={() => setMenuOpen(false)}>
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="/kids" onClick={() => setMenuOpen(false)}>
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cart" onClick={() => setMenuOpen(false)}>
              <FaCartArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>
              <FaHeart />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
