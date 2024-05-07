import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Salad = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Salads = data.filter((a) => a.category === "Салат");

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Salads.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Salad;
