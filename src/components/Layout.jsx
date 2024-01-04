import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";

const Layout = () => {
  return (
    <div className="">
      <nav className="container mx-auto flex gap-4 h-8  items-center py-6 pb-6 mb-8">
        <Link className="mr-48" to="/">
          <img className="w-8 h-8" src={logo} alt="" />
        </Link>
        <Link to="/categories">Categories</Link>
        <Link to="/addrecipes">Add Recipes</Link>
        <Link to="/myrecipes">My Recipes</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/shopinglist">Shoping List</Link>
        <Link to="/search">
          {" "}
          <img className="w-6 h-6" src={search} alt="" />
        </Link>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
