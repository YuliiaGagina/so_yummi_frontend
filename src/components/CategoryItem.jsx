import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useGetRecipesQuery } from "../redux/recipeApi";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const CategoryItem = ({ item }) => {
  const [recipesForEachCategory, setRecipesForEachCategory] = useState([]);
  const { data = [], error, isLoading } = useGetRecipesQuery();

  const style = {
    backgroundColor: "white",
  };
  useEffect(() => {
    if (data.length > 0) {
      const recipesForEachCategory = data.filter((el) => el.category === item);
      setRecipesForEachCategory(recipesForEachCategory);
      console.log(recipesForEachCategory);
    }
  }, [data, item]);

  const renderRecipePhoto = (recipe) => {
    let photoUrl = recipe.photo;
    if (photoUrl.startsWith("products\\")) {
      photoUrl = `http://localhost:3001/${photoUrl}`;
    }
    return photoUrl;
  };
  return (
    <div className="overflow-hidden">
      {isLoading && <Loader />}
      <h2 className="text-4xl text-gray-100 font-semibold mb-8 rounded-md">
        {" "}
        {item}
      </h2>
      <ul className="mb-8 sm:flex gap-10">
        {" "}
        {recipesForEachCategory.slice(0, 4).map((recipe) => (
          <li className="" key={recipe.title}>
            {" "}
            <NavLink
              className="relative  ease-in-out duration-500"
              to={`${recipe._id}`}
            >
              <div className="shadow-lg w-64 h-52 overflow-hidden rounded-md flex-column flex-wrap justify-center overflow-hidden   relative">
                <img
                  src={renderRecipePhoto(recipe)}
                  className="w-full h-full hover:scale-125 ease-in-out duration-500  overflow-hidden rounded-md shadow-xl shadow-cyan-500/50 block"
                  alt="1"
                />{" "}
                <p
                  style={style}
                  className=" py-2 px-2 w-64 text-center text-l font-semibold text-gray-90 rounded-md relative bottom-16 px-4"
                >
                  {recipe.title}
                </p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
      <NavLink
        to={`categories`}
        className="border-2 block border-green-20 py-1 px-1 text-center rounded-xl w-24 shadow-lg   ml-auto hover:bg-green-20 "
      >
        Se all
      </NavLink>
    </div>
  );
};

export default CategoryItem;
