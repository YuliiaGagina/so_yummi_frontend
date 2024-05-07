import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeIngredient } from "../redux/recipeSlice";
import { ThemeContext } from "./../components/ThemeProvider";

const ShopingList = () => {
  const selectedIngredients = useSelector((state) => state.recipe.engredients);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {selectedIngredients.length > 0 ? (
        <ul className="py-16">
          {selectedIngredients.map((ingredient, index) => (
            <li
              key={index}
              className={`rounded-md container mx-auto py-4 flex mb-16 gap-4 justify-between   py-4 px-4 bg-green mb-16 items-center ${
                theme === "light" ? "text-gray-99" : "text-green-90"
              }`}
            >
              {ingredient}
              <button onClick={() => dispatch(removeIngredient(ingredient))}>
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет выбранных ингредиентов</p>
      )}
    </div>
  );
};

export default ShopingList;
