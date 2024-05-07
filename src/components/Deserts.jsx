import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Deserts = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Deserts = data.filter((a) => a.category === "Десерты");

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Deserts.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Deserts;
