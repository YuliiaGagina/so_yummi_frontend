import React, { useContext } from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useGetAllRecipeForUserQuery } from "../redux/recipeApi";
import { getMyRecipes } from "./../redux/user/userOperations";
// import my from "../assets/my.png";
import rectangle from "../assets/rectangle.png";
import Pagination from "./../components/Pagination";
import { ThemeContext } from "./../components/ThemeProvider";

const MyRecipes = () => {
  const resipes = useSelector((state) => state.recipe.recipes);
  console.log(resipes);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  const { theme } = useContext(ThemeContext);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = resipes?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(resipes?.length / recordsPerPage);

  const renderRecipePhoto = (recipe) => {
    let photoUrl = recipe.photo;
    if (photoUrl.startsWith("products\\")) {
      photoUrl = `http://localhost:3001/${photoUrl}`;
    }
    return photoUrl;
  };

  // const dispatch = useDispatch();
  // useState(() => {
  //   dispatch(getMyRecipes());
  // }, [dispatch]);
  return (
    <main className="">
      <div className="relative flex items-center justify-center bottom-20 bg-my h-96 cover bg-cover">
        <h1 className="text-3xl font-bold text-green-20 "> My Recipes</h1>
      </div>

      <div className="container:lg md:px-28 xs:px-4 py-8">
        {resipes?.length > 0 ? (
          currentRecords.map((el) => (
            <NavLink to={`${el._id}`}>
              <div
                className="flex gap-4  xs:flex-col sm:flex-row py-4 px-4 bg-green mb-16 items-center"
                key={el._id}
              >
                <div className="flex-1  w-8 ">
                  <div className="w-80 h-56 rounded-xl overflow-hidden relative  mx-auto">
                    {" "}
                    <img
                      className="w-full h-full rounded-md overflow-hidden  mx-auto rounded-xl"
                      src={renderRecipePhoto(el)}
                      alt="recipe"
                    />
                  </div>
                </div>
                <div className="sm:basis-6/12 md:basis-7/12 ">
                  <div className="flex justify-between">
                    <h2 className="text-3xl text-green-90 font-bold">
                      {el.title}
                    </h2>
                    <button
                      className={`${
                        theme === "light" ? "text-gray-99" : "text-green-90"
                      }`}
                    >
                      delet
                    </button>
                  </div>
                  <p
                    className={`text-xl  px-2 py-8 ${
                      theme === "light" ? "text-gray-99" : "text-green-90"
                    } `}
                  >
                    {el.about.replace(/\n/g, " ")}
                  </p>
                  <div className="flex justify-between">
                    {" "}
                    <p
                      className={`${
                        theme === "light" ? "text-gray-99" : "text-green-90"
                      }`}
                    >
                      {el.cooking_time}
                    </p>
                    <button
                      className={`${
                        theme === "light" ? "text-gray-99" : "text-green-90"
                      }`}
                    >
                      see recipe
                    </button>
                  </div>
                </div>
              </div>
              <Outlet />
            </NavLink>
          ))
        ) : (
          <p>Поки тут немає рецептів</p>
        )}
      </div>

      {resipes?.length && (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
};

export default MyRecipes;
