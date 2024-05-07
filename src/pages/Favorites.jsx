import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorite } from "./../redux/user/userOperations";
import { ThemeContext } from "./../components/ThemeProvider";

const Favorites = () => {
  const dispatch = useDispatch();
  const resipes = useSelector((state) => state.recipe.recipes);
  console.log(resipes);
  const favorites = resipes?.filter((recipe) => recipe.favorite === true);
  const [successMessage, setSuccessMessage] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleDeleteFavorite = async (recipeId) => {
    try {
      await dispatch(addToFavorite({ id: recipeId, favorite: false }));
      setSuccessMessage("Рецепт успешно удален из избранного!");
    } catch (error) {
      console.error("Ошибка при добавлении рецепта в избранное:", error);
    }
  };

  const renderRecipePhoto = (recipe) => {
    let photoUrl = recipe.photo;
    if (photoUrl.startsWith("products\\")) {
      photoUrl = `http://localhost:3001/${photoUrl}`;
    }
    return photoUrl;
  };

  return (
    <main className="">
      <div className="relative flex items-center justify-center bottom-20 bg-bg3 h-96 cover bg-center bg-cover">
        <h1 className="text-3xl font-bold text-green-20 ">Фавориты</h1>
      </div>

      <div className="container:lg md:px-28 xs:px-4 py-8">
        {resipes &&
          favorites.map((el) => (
            <div>
              <button
                className="px-4 py-2 text-white rounded-sm bg-green-90"
                onClick={() => handleDeleteFavorite(el._id)}
              >
                delete from favorite
              </button>
              {successMessage && <p>Рецепт успешно удален из избранного!</p>}
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
                      {/* <button
                        className="px-4 py-2 text-white rounded-sm bg-green-90"
                        onClick={() => handleDeleteFavorite(el._id)}
                      >
                        delet
                      </button> */}
                    </div>
                    <p
                      className={`text-xl  px-2 py-8 ${
                        theme === "light" ? "text-gray-99" : "text-green-90"
                      }`}
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
                      <button className="px-4 py-2 text-white rounded-sm bg-green-90">
                        see recipe
                      </button>
                    </div>
                  </div>
                </div>
                <Outlet />
              </NavLink>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Favorites;
