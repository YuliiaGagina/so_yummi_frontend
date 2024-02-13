import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "../assets/search.svg";
import { TiThMenuOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-menu-container">
      <button className="menu-toggle md:hidden" onClick={toggleMenu}>
        <TiThMenuOutline />
      </button>

      <div
        className={`mobile-menu ${isMenuOpen ? "block" : "hidden"} mg:hidden  `}
      >
        <nav className="w-80 h-96 text-white  bg-green-90 p-16 flex flex-col items-center gap-6 justify-center absolute z-50 top-0 left-0">
          <Link onClick={closeMenu} className="w-32" to="/categories">
            Categories
          </Link>
          <Link onClick={closeMenu} className="w-32" to="/addrecipes">
            Add Recipes
          </Link>
          <Link onClick={closeMenu} className="w-32" to="/myrecipes">
            My Recipes
          </Link>
          <Link onClick={closeMenu} className="w-32" to="/favorites">
            Favorites
          </Link>
          <Link onClick={closeMenu} className="w-32" to="/shopinglist">
            Shoping List
          </Link>
          <Link to="/search" onClick={closeMenu}>
            {" "}
            <CiSearch />
          </Link>
          <button className="close-menu" onClick={toggleMenu}>
            ✕
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
