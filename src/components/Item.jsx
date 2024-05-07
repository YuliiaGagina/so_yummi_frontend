import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Item = ({ recipe }) => {
  const style = {
    backgroundColor: "white",
  };
  const renderRecipePhoto = (recipe) => {
    let photoUrl = recipe.photo;
    if (photoUrl.startsWith("products\\")) {
      photoUrl = `http://localhost:3001/${photoUrl}`;
    }
    return photoUrl;
  };
  return (
    <NavLink
      className="relative  ease-in-out duration-500"
      to={`${recipe._id}`}
    >
      <div className="shadow-lg w-72 h-52 overflow-hidden rounded-md flex flex-wrap justify-center overflow-hidden   relative">
        <img
          src={renderRecipePhoto(recipe)}
          className="w-full h-full hover:scale-125 ease-in-out duration-500  overflow-hidden rounded-md shadow-xl shadow-cyan-500/50 block"
          alt="1"
        />{" "}
        <p
          style={style}
          className=" py-2 px-2 w-64 text-center align-center text-l font-semibold text-gray-90 rounded-md relative bottom-16"
        >
          {recipe.title}
        </p>
      </div>
      <Outlet />
    </NavLink>
  );
};

export default Item;
