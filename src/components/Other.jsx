import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Other = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Others = data.filter((a) => a.category === "Другое");

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Others.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Other;
