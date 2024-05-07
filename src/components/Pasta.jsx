import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Pasta = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Pastas = data.filter((a) => a.category === "Паста");

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Pastas.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Pasta;
