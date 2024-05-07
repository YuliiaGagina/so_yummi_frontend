import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFilteredRecipes } from "./../redux/selectors";
import CategoryItem from "./../components/CategoryItem";
import Filter from "./../components/Filter";
import { useDispatch } from "react-redux";
import { setAllRecipes } from "../redux/recipeSlice";
import { useGetRecipesQuery } from "../redux/recipeApi";
import { NavLink, Outlet } from "react-router-dom";
import Pagination from "./../components/Pagination";

const Search = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector(getFilteredRecipes);
  const { data = [], error, isLoading } = useGetRecipesQuery();
  console.log(allRecipes);
  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setAllRecipes(data));
    }
  }, [dispatch, data]);
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
    <main className="py-16">
      <Filter />
      <div className="">
        {allRecipes && (
          <ul className="container:lg flex gap-4 mx-auto flex-wrap md:px-28 xs:px-4 sm:px-8  mb-9  xs:mx-auto">
            {allRecipes.map((recipe) => (
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
                  <Outlet />
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Search;
