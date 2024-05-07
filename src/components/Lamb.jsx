import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Lamb = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Lambs = data.filter((a) => a.category === "Ягненок");

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Lambs.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Lamb;
