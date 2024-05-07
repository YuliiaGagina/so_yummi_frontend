import React, { useEffect } from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Breakfast = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Breakfasts = data.filter((a) => a.category === "Завтрак");
  console.log(Breakfasts);

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Breakfasts.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Breakfast;
