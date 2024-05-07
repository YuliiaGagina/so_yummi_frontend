import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import authSelectors from "../redux/user/user-selectors";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import MobileMenu from "./MobileMenu";
import { FaSearch } from "react-icons/fa";
import AuthNav from "./AuthNav";
import Usermenu from "./Usermenu";
import { useAuth } from "./hooks/useAuth";

const Layout = () => {
  const { isLoggedIn } = useAuth();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  console.log(isUserLoggedIn);

  useEffect(() => {
    setIsUserLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="">
      <nav className=" relative z-10 container mx-auto flex gap-4 h-8 justify-between  items-center py-6 pb-6 mb-8">
        <Link className="mr-32" to="/">
          <img className="w-8 h-8" src={logo} alt="" />
        </Link>
        <div className="md:flex gap-2 items-center xs:hidden sm:hidden md:block">
          {" "}
          <Link
            className="w-32 hover:text-green-100 hover:font-semibold"
            to="/categories"
          >
            Categories
          </Link>
          <Link
            className="w-32 hover:text-green-100 hover:font-semibold"
            to="/addrecipes"
          >
            Add Recipes
          </Link>
          <Link
            className="w-32 hover:text-green-100 hover:font-semibold"
            to="/myrecipes"
          >
            My Recipes
          </Link>
          <Link
            className="w-32 hover:text-green-100 hover:font-semibold"
            to="/favorites"
          >
            Favorites
          </Link>
          <Link
            className="w-32 hover:text-green-100 hover:font-semibold"
            to="/shopinglist"
          >
            Shoping List
          </Link>
          <Link to="/search" className=" hover:text-green-100 ">
            {" "}
            {/* <img className="w-6 h-6" src={search} alt="" /> */}
            <FaSearch />
          </Link>
        </div>

        <MobileMenu />
        {isUserLoggedIn ? <Usermenu /> : <AuthNav />}
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
