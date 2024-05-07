import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetRecipesQuery } from "../redux/recipeApi";
import { useDispatch } from "react-redux";
import { addToFavorite } from "./../redux/user/userOperations";
import { addIngredient, removeIngredient } from "../redux/recipeSlice";
import { useSelector } from "react-redux";

// делаем запрос по айдишнику и рендерим всю инфу

const Recipe = () => {
  const { recipeId } = useParams();
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");
  // const [selectedIngredients, setSelectedIngredients] = useState([]);
  const selectedIngredients = useSelector((state) => state.recipe.engredients);

  const recipe = data.find((e) => e._id === recipeId);

  const ingredients = recipe?.ingredients?.split(",");
  const cleanedStr = recipe?.recipe_preparation.replace(/\\n/g, " \n");

  const handleToggleIngredient = (ingredient) => {
    // Проверяем, есть ли ингредиент уже в списке выбранных
    const isSelected = selectedIngredients.includes(ingredient);

    if (isSelected) {
      // Если ингредиент уже выбран, удаляем его
      dispatch(removeIngredient(ingredient));
    } else {
      // Если ингредиент не выбран, добавляем его
      dispatch(addIngredient(ingredient));
    }
  };

  const handleAddToFavorite = async () => {
    try {
      await dispatch(addToFavorite({ id: recipeId, favorite: true }));
      setSuccessMessage("Рецепт успешно добавлен в избранное!");
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
    recipe && (
      <main className="">
        <div className="relative flex gap-4 flex-col   items-center justify-center  bottom-20 bg-my h-96 cover bg-cover">
          <h1 className="text-3xl font-bold  text-green-20 ">{recipe.title}</h1>
          <p className="px-64 text-xl text-center">{recipe.about}</p>
          {!recipe.favorite && (
            <button
              type="button"
              onClick={() => dispatch(handleAddToFavorite)}
              className="border rounded-full border-green-20 py-4 px-4 mt-4 "
            >
              Добавить в избранное
            </button>
          )}
          {successMessage && <p>Рецепт успешно добавлен в избранное!</p>}
          <p>{recipe.cooking_time}</p>
        </div>
        <div>
          <div className="rounded-md container mb-16 mx-auto flex items-center  justify-between  h-16 bg-green-20">
            <div className="px-4 text-white">Ингредиенты</div>
            <div className="px-4 text-white">Добавить в список покупок.</div>
          </div>
          <div>
            {ingredients ? (
              ingredients?.map((ingredient) => (
                <div
                  key={ingredient}
                  className="rounded-md container mx-auto py-4 flex mb-16 gap-4 justify-between   py-4 px-4 bg-green mb-16 items-center"
                >
                  <div className=" w-8 ">
                    <div className="  ">
                      {" "}
                      <p>{ingredient}</p>
                    </div>
                  </div>
                  <div className="px-24">
                    <input
                      type="checkbox"
                      // checked={selectedIngredients.includes(ingredient)}
                      onChange={() => handleToggleIngredient(ingredient)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="container mx-auto mb-52">
                Извините, для этого блюда нет ингедиентов!
              </div>
            )}
          </div>
          <div className="container mx-auto flex justify-between items-center">
            <div className="basis-6/12">
              <h3 className="font-semibold text-xl mb-8">
                Cпособ приготовления
              </h3>
              <p className="mb-8">{cleanedStr}</p>
            </div>
            <div>
              <img
                className="w-96 rounded-lg"
                src={renderRecipePhoto(recipe)}
                alt="photo-recipe"
              />
            </div>
          </div>
        </div>
      </main>
    )
  );
};

export default Recipe;
